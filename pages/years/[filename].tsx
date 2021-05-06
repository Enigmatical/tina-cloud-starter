import type { Years_Document } from "../../.tina/__generated__/types";
import { createLocalClient } from "../../utils";
import Nav from "../../components/Nav";
import YearsRenderer from "../../components/YearsRenderer";

export default function YearPage(props: YearQueryResponseType) {
  return (
    <>
      <Nav active="/years" />
      <YearsRenderer {...props.getYearsDocument} />
    </>
  );
}

export type YearQueryResponseType = {
  getYearsDocument: Years_Document;
};

export const query = (gql) => gql`
  query YearQuery($relativePath: String!) {
    getYearsDocument(relativePath: $relativePath) {
      sys {
        collection {
          slug
        }
      }
      data {
        ... on Year_Doc_Data {
          title
          deck
          games {
            ... on Games_Document {
              sys {
                collection {
                  slug
                }
                breadcrumbs(excludeExtension: true)
              }
              data {
                ... on Game_Doc_Data {
                  title
                  image
                }
              }
            }
          }
          _body
        }
      }
    }
  }
`;

const client = createLocalClient();

export const getStaticProps = async ({ params }) => {
  return {
    props: await client.request(query, {
      variables: { relativePath: `${params.filename}.md` },
    }),
  };
};

export const getStaticPaths = async () => {
  const yearsListData = await client.request<{
    getYearsList: Years_Document[];
  }>(
    (gql) => gql`
      {
        getYearsList {
          sys {
            filename
          }
        }
      }
    `,
    { variables: {} }
  );
  return {
    paths: yearsListData.getYearsList.map((year) => ({
      params: { filename: year.sys.filename },
    })),
    fallback: false,
  };
};

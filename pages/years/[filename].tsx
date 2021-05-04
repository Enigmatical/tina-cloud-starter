import type { Years_Document } from "../../.tina/__generated__/types";
import { createLocalClient } from "../../utils";
import YearsRenderer from "../../components/YearsRenderer";

export default function YearPage(props: YearQueryResponseType) {
  return <YearsRenderer {...props.getYearsDocument.data} />;
}

export const query = (gql) => gql`
  query YearQuery($relativePath: String!) {
    getYearsDocument(relativePath: $relativePath) {
      data {
        ... on Year_Doc_Data {
          title
          deck
          games {
            ... on Games_Document {
              data {
                ... on Game_Doc_Data {
                  title
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

export type YearQueryResponseType = {
  getYearsDocument: Years_Document;
};

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

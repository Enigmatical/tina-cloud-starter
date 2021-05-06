import type { Games_Document } from "../../.tina/__generated__/types";
import { createLocalClient } from "../../utils";
import Nav from "../../components/Nav";
import GamesRenderer from "../../components/GamesRenderer";

export default function GamePage(props: GameQueryResponseType) {
  return (
    <>
      <Nav active="/games" />
      <GamesRenderer {...props.getGamesDocument} />
    </>
  );
}

export const query = (gql) => gql`
  query GameQuery($relativePath: String!) {
    getGamesDocument(relativePath: $relativePath) {
      sys {
        collection {
          slug
        }
        breadcrumbs(excludeExtension: true)
      }
      data {
        ... on Game_Doc_Data {
          title
          deck
          image
          wiki
          thoughts
          review
          invested
          variants {
            ... on Physical_Data {
              console
            }
            ... on Digital_Data {
              store
            }
          }
          _body
        }
      }
    }
  }
`;

export type GameQueryResponseType = {
  getGamesDocument: Games_Document;
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
  const gamesListData = await client.request<{
    getGamesList: Games_Document[];
  }>(
    (gql) => gql`
      {
        getGamesList {
          sys {
            filename
          }
        }
      }
    `,
    { variables: {} }
  );
  return {
    paths: gamesListData.getGamesList.map((year) => ({
      params: { filename: year.sys.filename },
    })),
    fallback: false,
  };
};

import type { Games_Document } from "../../.tina/__generated__/types";
import { createLocalClient } from "../../utils";
import GamesRenderer from "../../components/GamesRenderer";

export default function GamePage(props: GameQueryResponseType) {
  return <GamesRenderer {...props.getGamesDocument.data} />;
}

export const query = (gql) => gql`
  query GameQuery($relativePath: String!) {
    getGamesDocument(relativePath: $relativePath) {
      data {
        ... on Game_Doc_Data {
          title
          deck
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

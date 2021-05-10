import React from "react";
import {
  useGraphqlForms,
  useDocumentCreatorPlugin,
} from "tina-graphql-gateway";
import GamePage, { query, GameQueryResponseType } from "../../games/[filename]";

/**
 * This admin page works in a similar manner to the one found at "pages/admin/index.tsx"
 * The only difference is here we're using a dynamic route variable to fetch the correct file.
 */
export default function AdminPage(props) {
  const [payload, isLoading] = useGraphqlForms<GameQueryResponseType>({
    query,
    variables: { relativePath: `${props.filename}.md` },
  });

  useDocumentCreatorPlugin(
    (res) => console.log("Created new doc", res),
    (collections) => {
      return collections.filter(({ label }) => label === "Games");
    }
  );

  return isLoading ? <p>Loading...</p> : <GamePage {...payload} />;
}

export const getServerSideProps = ({ params }) => {
  return { props: params };
};

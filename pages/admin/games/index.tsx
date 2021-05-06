import React from "react";
import { useDocumentCreatorPlugin } from "tina-graphql-gateway";
import { createLocalClient } from "../../../utils";
import GameIndex, { query } from "../../games/index";
import type { GamesQueryResponseType } from "../../games/index";

export default function AdminPage(props: GamesQueryResponseType) {
  useDocumentCreatorPlugin(
    (res) => console.log("Created new doc", res),
    (collections) => collections.filter(({ label }) => label === "Years")
  );

  return <GameIndex {...props} />;
}

const client = createLocalClient();

export const getStaticProps = async () => {
  return {
    props: await client.request(query, {
      variables: {},
    }),
  };
};

import React from "react";
import {
  useGraphqlForms,
  useDocumentCreatorPlugin,
} from "tina-graphql-gateway";
import GameIndex from "../../games/index";

export default function AdminPage(props) {
  useDocumentCreatorPlugin(
    (res) => console.log("Created new doc", res),
    (collections) => collections.filter(({ label }) => label === "Games")
  );

  return <GameIndex />;
}

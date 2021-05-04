import React from "react";
import {
  useGraphqlForms,
  useDocumentCreatorPlugin,
} from "tina-graphql-gateway";
import YearIndex from "../../years/index";

export default function AdminPage(props) {
  useDocumentCreatorPlugin(
    (res) => console.log("Created new doc", res),
    (collections) => collections.filter(({ label }) => label === "Years")
  );

  return <YearIndex />;
}

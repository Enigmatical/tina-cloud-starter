import React from "react";
import { useDocumentCreatorPlugin } from "tina-graphql-gateway";
import { createLocalClient } from "../../../utils";
import YearIndex, { query } from "../../years/index";
import type { YearsQueryResponseType } from "../../years/index";

export default function AdminPage(props: YearsQueryResponseType) {
  useDocumentCreatorPlugin(
    (res) => console.log("Created new doc", res),
    (collections) => collections.filter(({ label }) => label === "Years")
  );

  return <YearIndex {...props} />;
}

const client = createLocalClient();

export const getStaticProps = async () => {
  return {
    props: await client.request(query, {
      variables: {},
    }),
  };
};

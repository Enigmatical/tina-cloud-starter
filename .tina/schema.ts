import { defineSchema } from "tina-graphql-gateway-cli";

export default defineSchema({
  collections: [
    {
      label: "Games",
      name: "games",
      path: "content/games",
      templates: [
        {
          label: "Game",
          name: "game",
          fields: [
            {
              type: "text",
              label: "Title",
              name: "title",
            },
            {
              type: "textarea",
              label: "Deck",
              name: "deck",
            },
            {
              type: "text",
              label: "Image Link",
              name: "image",
            },
            {
              type: "text",
              label: "Wiki Link",
              name: "wiki",
            },
            {
              type: "blocks",
              label: "Variants",
              name: "variants",
              templates: [
                {
                  label: "Physical",
                  name: "physical",
                  fields: [
                    {
                      type: "text",
                      label: "Console",
                      name: "console",
                    },
                  ],
                },
                {
                  label: "Digital",
                  name: "digital",
                  fields: [
                    {
                      type: "text",
                      label: "Store",
                      name: "store",
                    },
                  ],
                },
              ],
            },
            {
              type: "text",
              label: "Location",
              name: "location",
            },
            {
              type: "textarea",
              label: "Thoughts",
              name: "thoughts",
            },
            {
              type: "select",
              label: "Review",
              name: "review",
              options: ["5", "4", "3", "2", "1"],
            },
            {
              type: "text",
              label: "Time Invested",
              name: "invested",
            },
          ],
        },
      ],
    },
    {
      label: "Years",
      name: "years",
      path: "content/years",
      templates: [
        {
          label: "Year",
          name: "year",
          fields: [
            {
              type: "text",
              label: "Title",
              name: "title",
            },
            {
              type: "textarea",
              label: "Deck",
              name: "deck",
            },
            {
              type: "reference-list",
              label: "Games",
              name: "games",
              collection: "games",
            },
          ],
        },
      ],
    },
  ],
});

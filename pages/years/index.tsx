import type { Years_Document } from "../../.tina/__generated__/types";
import { createLocalClient } from "../../utils";
import Nav from "../../components/Nav";

const YearIndex = (props: YearsQueryResponseType) => {
  const { getYearsList: years } = props;

  return (
    <>
      <Nav active="/years" />
      <div className="relative py-16 bg-white overflow-hidden">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
                Collection
              </span>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Years
              </span>
            </h1>
          </div>
          <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
            <div className="flex flex-col">
              <div className="-my-2 overflow-x-auto mx-32">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Title
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Deck
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {years.map((year, idx) => {
                          const {
                            sys: {
                              collection: { slug },
                              breadcrumbs,
                            },
                            data: { title, deck },
                          } = year;
                          const viewLink = `/${slug}/${breadcrumbs.join("/")}`;
                          const editLink = `/admin/${slug}/${breadcrumbs.join(
                            "/"
                          )}`;
                          return (
                            <tr
                              key={`year-${idx}`}
                              className={
                                idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                              }
                            >
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                <a
                                  href={viewLink}
                                  className="text-indigo-600 hover:text-indigo-900"
                                >
                                  {title}
                                </a>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {deck}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                                <a
                                  href={editLink}
                                  className="text-indigo-600 hover:text-indigo-900"
                                >
                                  Edit
                                </a>
                              </td>
                            </tr>
                          );
                        })}
                        {/* {people.map((person, personIdx) => (
                    <tr key={person.email} >
                    </tr>
                  ))} */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const client = createLocalClient();

export type YearsQueryResponseType = {
  getYearsList: Years_Document[];
};

const query = (gql) => gql`
  query YearsQuery {
    getYearsList {
      id
      sys {
        collection {
          slug
        }
        breadcrumbs(excludeExtension: true)
      }
      data {
        ... on Year_Doc_Data {
          title
          deck
        }
      }
    }
  }
`;

export const getStaticProps = async () => {
  return {
    props: await client.request(query, {
      variables: {},
    }),
  };
};

export default YearIndex;

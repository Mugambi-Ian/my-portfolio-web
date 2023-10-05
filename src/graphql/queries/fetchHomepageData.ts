import gql from 'graphql-tag';

export const GET_HOMEPAGE_DATA = gql`
  query getHomepageData($locale: I18NLocaleCode) {
    resume(locale: $locale, publicationState: PREVIEW) {
      data {
        attributes {
          workExperience {
            id
            title
            company
            description
            start_date
            end_date
            location
            roles {
              id
              department
              project_url
              tech_stack(pagination: { limit: 100 }) {
                data {
                  id
                  attributes {
                    techStack
                  }
                }
              }
              deparment_roles {
                data {
                  id
                  attributes {
                    role
                  }
                }
              }
            }
          }
          projects {
            id
            title
            long_description
            project_url
            project_cover
            links {
              id
              link
              type
              name
            }
          }
        }
      }
    }
  }
`;

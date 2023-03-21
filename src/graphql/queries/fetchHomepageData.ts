import gql from 'graphql-tag';

export const GET_HOMEPAGE_DATA = gql`
  query ($locale: I18NLocaleCode) {
    resume(locale: $locale) {
      data {
        attributes {
          workExperience {
            id
            title
            company
            start_date
            end_date
            description
            location
            roles {
              id
              department
              project_url
              tech_stack {
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
        }
      }
    }
  }
`;

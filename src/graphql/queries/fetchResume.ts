import gql from 'graphql-tag';

export const GET_RESUME = gql`
  query getResume($locale: I18NLocaleCode) {
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
          references {
            id
            name
            email
            title
          }
          projects {
            id
            title
            description
            project_url
          }
          awards {
            id
            title
            award
            date
          }
        }
      }
    }
  }
`;

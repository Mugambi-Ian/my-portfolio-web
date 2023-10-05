import gql from 'graphql-tag';

export const GET_RESUME = gql`
  query getResume($locale: I18NLocaleCode) {
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
            description
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
          references {
            id
            name
            email
            title
          }
          projects {
            id
            title
            project_url
            long_description
          }
          education {
            start
            school
            course
            end_date
          }
          awards {
            id
            title
            award
            description
            date
          }
        }
      }
    }
  }
`;

import gql from 'graphql-tag';

export const GET_RESUME = gql`
  query {
    resume {
      data {
        attributes {
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
            description
          }
          awards {
            id
            title
            award
            date
            description
          }
          workExperience {
            id
            title
            company
            start_date
            description
            end_date
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

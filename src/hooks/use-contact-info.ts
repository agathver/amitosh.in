import { graphql, useStaticQuery } from 'gatsby'

export function useContactInfo() {
  const data = useStaticQuery(graphql`
    query SiteContactQuery {
      site {
        siteMetadata {
          contactInfo {
            email
            twitter
            github
            linkedIn
            medium
          }
        }
      }
    }
  `)

  const {
    email,
    twitter,
    github,
    linkedIn,
    medium
  } = data.site.siteMetadata.contactInfo

  return { email, twitter, github, linkedIn, medium }
}

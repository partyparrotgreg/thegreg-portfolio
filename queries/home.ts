import { graphql } from "@/gql";

export const HOME_QUERY = graphql(`
  query HomePageQuery {
    site: _site {
      favicon: faviconMetaTags {
        attributes
        content
        tag
      }
    }
    home {
      seo: _seoMetaTags {
        attributes
        content
        tag
      }
    }
    experiences: allExperiences(
      orderBy: start_DESC
      filter: { projects: { exists: "true" } }
    ) {
      role
      start
      end
      id
      client {
        company
        id
      }
      projects {
        projectName
        productName
        id
        cover {
          width
          height
          url
          alt
          responsiveImage {
            src
            srcSet
            height
            width
          }
        }
        slug
        client {
          company
        }
      }
      description
    }
  }
`);

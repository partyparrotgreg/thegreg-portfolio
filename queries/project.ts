import { graphql } from "@/gql";

export const PROJECT_QUERY = graphql(`
    query ProjectQuery($slug: String) {
    project(filter: { slug: { eq: $slug } }) {
      id
      projectName
      cover {
        responsiveImage {
          src
          srcSet
          base64
          width
          height
          alt
          title
          webpSrcSet
        }
        url
      }
      slug
      summary
      role {
        role
        start
        end
      }
      skills {
        name
        id
      }
      client {
        id
        website
        company
        logo {
          url
          width
          height
        }
      }
      color {
        hex
        cssRgb
      }
      body {
        blocks {
          __typename
          ... on FlowBlockRecord {
            __typename
            id
            images {
              responsiveImage {
                src
                srcSet
                base64
                width
                height
                alt
                title
                webpSrcSet
              }
            }
            description
          }
          ... on MobileStackRecord {
            __typename
            id
            title
            description
            images {
              responsiveImage {
                src
                srcSet
                base64
                width
                height
                alt
                title
                webpSrcSet
              }
            }
          }
          ... on BeforeAfterBlockRecord {
            id
            title
            description
            left {
              responsiveImage {
                src
                srcSet
                base64
                width
                height
                alt
                title
                webpSrcSet
              }
            }
            right {
              responsiveImage {
                src
                srcSet
                base64
                width
                height
                alt
                title
                webpSrcSet
              }
            }
          }
          ... on FeaturephotoblockRecord {
            id
            title
            description
            span
            padding
            image {
              responsiveImage {
                src
                srcSet
                base64
                width
                height
                alt
                title
                webpSrcSet
              }
            }
            images {
              responsiveImage {
                src
                srcSet
                base64
                width
                height
                alt
                title
                webpSrcSet
              }
            }
          }
          ... on SectionBlockRecord {
            id
            subtitle
            sectionTitle
          }
          ... on SliderShowcaseBlockRecord {
            id
            blocks {
              imageTitle
              description
              id
              images {
                responsiveImage {
                  src
                  srcSet
                  base64
                  width
                  height
                  alt
                  title
                  webpSrcSet
                }
              }
            }
          }
          ... on ProcessListBlockRecord {
            id
            blocks {
              id
              icon
              processDescription
              title
            }
          }
          ... on FeaturephotoblockRecord {
            id
            image {
              responsiveImage {
                src
                srcSet
                base64
                width
                height
                alt
                title
                webpSrcSet
              }
            }
            title
            description
            span
          }
          ... on StatListRecord {
            id
            blocks {
              id
              label
              value
            }
          }
          ... on ProjectOverviewBlockRecord {
            id
            projectDescription
            client {
              id
              website
              company
              logo {
                url
                width
                height
              }
            }
          }
          ... on ThemedImageBlockRecord {
            id
            description
            imageTitle
            images {
              responsiveImage {
                src
                srcSet
                base64
                width
                height
                alt
                title
                webpSrcSet
              }
            }
            contentPadding
            rounded
          }
        }
        value
      }
      meta: _seoMetaTags(locale: en) {
        attributes
        content
        tag
      }
      seo {
        title
        noIndex
        description
        image {
          url(imgixParams: { crop: top, h: "630", w: "1200" })
        }
        twitterCard
      }
    }
    footer {
      hiringText
      links {
        id
        title
        url
        external
      }
    }
  }
`)
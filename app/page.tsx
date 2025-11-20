import { performRequest } from "@/lib/datocms";
import { graphql } from "@/gql";

const PAGE_QUERY = graphql(`
  query PageQuery {
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
      pageIntro
    }
    allProjects {
      id
      projectName
      slug
    }
  }
`);

export default async function Home() {
  const data = await performRequest({ query: PAGE_QUERY });

  return (
    <div className="p-4 bg-white">
      <h1 className="text-5xl">The Greg</h1>
      <pre className="text-xs text-zinc-500 overflow-auto max-w-full">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}

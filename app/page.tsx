import { performRequest } from "@/lib/datocms";
import { toNextMetadata } from "react-datocms";
import { HOME_QUERY } from "@/queries/home";
import Link from "next/link";
import { ProjectRoleBar } from "@/components/blocks/ProjectRoleBar";

const getHomeContent = async () => await performRequest({ query: HOME_QUERY });

export async function generateMetadata() {
  const response = await getHomeContent();

  return toNextMetadata([...response.site.favicon, ...response.home!.seo]);
}

export default async function Home() {
  const data = await performRequest({ query: HOME_QUERY });

  return (
    <div>
      <section className="page-section justify-center flex flex-col items-center relative bg-secondary">
        <div className="container relative z-10 pt-52 pb-24">
          <h1 className="hero-title max-w-4xl">I design and build digital products for Web3, DeFi and FinTech.</h1>
        </div>
        <video src="unicorn-1763578580412.webm" className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted />
      </section>
      <section className="page-section">
        <div className="container">
          <ul>
            {data.miniProjects.map((project) => (
              <li key={project.id}><Link href={`/project/${project.slug}`}>{project.projectName}</Link></li>
            ))}
          </ul>
        </div>
      </section>
      <div>
        <ProjectRoleBar />
        <section className="page-section">
          <div className="container">
            <div>Project role</div>
          </div>
        </section>
      </div>
    </div>
  );
}

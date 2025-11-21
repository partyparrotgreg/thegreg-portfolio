import { performRequest } from "@/lib/datocms";
import { toNextMetadata } from "react-datocms";
import { HOME_QUERY } from "@/queries/home";
import { ProjectRoleBar } from "@/components/blocks/ProjectRoleBar";
import { ProjectDescription } from "@/components/typography";
import { SwiperCarousel } from "@/components/blocks/SwiperCarousel";
import { ProjectCard } from "@/components/blocks/ProjectCard";
import { ProjectRecord } from "@/gql/graphql";
import { Fragment } from "react/jsx-runtime";


const getHomeContent = async () => await performRequest({ query: HOME_QUERY });

export async function generateMetadata() {
  const response = await getHomeContent();

  return toNextMetadata([...response.site.favicon, ...response.home!.seo]);
}

export default async function Home() {
  const data = await performRequest({ query: HOME_QUERY });
  const { experiences } = data;

  return (
    <div>
      <section className="page-section justify-center flex flex-col items-center relative bg-secondary">
        <div className="container relative z-10 pt-52 pb-24">
          <h1 className="hero-title max-w-4xl">I design and build digital products for Web3, DeFi and FinTech.</h1>
        </div>
        <video src="unicorn-1763578580412.webm" className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted />
      </section>

      {experiences.map(({ id, role, start, end, client, description, projects }) => (
        <Fragment key={id}>
          <ProjectRoleBar role={role} company={client.company} from={start} to={end} />
          <section className="page-section">
            {description && <div className="container">
              <ProjectDescription>{description}</ProjectDescription>
            </div>}
          </section>
          <section className="page-section overflow-hidden pb-36">
            <div className="container">
              <SwiperCarousel items={projects.map((project) => (
                <ProjectCard key={project.id} project={project as ProjectRecord} />
              ))} />
            </div>
          </section>
        </Fragment>
      ))}



    </div>
  );
}

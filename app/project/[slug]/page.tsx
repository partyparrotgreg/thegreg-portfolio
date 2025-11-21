import { ProjectRoleBar } from "@/components/blocks/ProjectRoleBar";
import { SkillsRender } from "@/components/project/skills-render";
import { SkillRecord } from "@/gql/graphql";
import { performRequest } from "@/lib/datocms";
import { PROJECT_QUERY } from "@/queries/project";
import Image from "next/image";

const getProjectData = async (slug: string) => await performRequest({ query: PROJECT_QUERY, variables: { slug }, revalidate: 0 });


// // TODO: Change to DatoCMS stuff
// export async function generateMetadata({
//     params,
// }: {
//     params: Promise<{ slug: string }>;
// }) {
//     const { slug } = await params;
//     const { project } = await getProjectData(slug);

//     if (!project) return null;

//     return toNextMetadata([...project.meta, { title: project.projectName }]);
// }


export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const { project } = await getProjectData(slug);

    if (!project) return null;

    const { projectName, client, summary } = project;

    return {
        title: 'How I worked on ' + projectName + ' for ' + client?.company,
        description: summary,
        openGraph: {
            title: 'How I worked on ' + projectName + ' for ' + client?.company,
            description: summary,
            images: [
                {
                    url: project.cover.url,
                    width: 1200,
                    height: 630,
                },
            ],
        },
    }
}

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const { project } = await getProjectData(slug);

    if (!project) return null;

    const { cover, summary, projectName, body } = project;

    return (
        <div className="pt-40 relative">
            <video src="unicorn-1763578580412.webm" className="absolute top-0 left-0 w-full h-40 object-cover outline-4" autoPlay loop muted />
            <ProjectRoleBar role={"asdasd"} company={"eeeee"} from={"2021-04-23"} to="2022-04-23" />
            <div key="role" className="text-foreground/75">
                {project.role?.role}
            </div>

            <SkillsRender
                skills={project.skills as SkillRecord[]}
                isVertical
            />

            <div key="year" className="text-foreground/75">
                {new Date(project.role?.start).getFullYear()}{" "}
                {project.role?.end ? (
                    <>— {new Date(project.role?.end).getFullYear()}</>
                ) : (
                    <>— Current</>
                )}
            </div>
            <header className="page-section">
                <div className="flex flex-col gap-12">
                    <TextProjectName>{projectName}</TextProjectName>
                    <TextProjectSummary>{summary}</TextProjectSummary>
                </div>
            </header>
            <section className="page-section bg-secondary">
                <div className="container">
                    <Image src={cover.url} alt={projectName} width={1200} height={600} className="w-full h-auto" />
                </div>
            </section>
            <section>
                <pre>{JSON.stringify(project, null, 2)}</pre>
            </section>
        </div>
    )
}


const TextProjectName = ({ children }: { children: React.ReactNode }) => {
    return (
        <h1 className="text-lg">{children}</h1>
    )
}
const TextProjectSummary = ({ children }: { children: React.ReactNode }) => {
    return (
        <p className="text-3xl font-heading tracking-tight">{children}</p>
    )
}
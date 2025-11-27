import { getBlock } from "@/components/blocks/get-block";
import { ProjectRoleBar } from "@/components/blocks/project-role-bar";
import { SkillsRender } from "@/components/project/skills-render";
import { SkillRecord } from "@/gql/graphql";
import { performRequest } from "@/lib/datocms";
import { PROJECT_QUERY } from "@/queries/project";
import { CdaStructuredTextValue, isCode, isHeading, isParagraph } from "datocms-structured-text-utils";
import { StructuredText, Image as ReactDatocmsImage, ResponsiveImageType, renderNodeRule } from "react-datocms";
import { createElement } from "react";
import { cn } from "@/lib/utils";
import { SyntaxHighlighter } from "@/components/blocks/syntax-highlighter";

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

    const headingClass = (level: number) => {
        switch (level) {
            case 1:
                return "text-4xl font-bold";
            case 2:
                return "text-3xl font-bold";
            case 3:
                return "text-2xl font-bold";
            case 4:
                return "text-xl font-bold";
            case 5:
                return "text-lg font-bold";
            case 6:
                return "text-base font-bold";
            default:
                return "text-base font-bold";
        }
    };

    const { slug } = await params;
    const { project } = await getProjectData(slug);

    if (!project) return null;

    const { cover, summary, projectName, body } = project;

    return (
        <div className="pt-40 relative">
            <video src="unicorn-1763578580412.webm" className="absolute top-0 left-0 w-full h-40 object-cover outline-4" autoPlay loop muted />
            <ProjectRoleBar role={project.role!.role} company={project.client!.company} from={project.role!.start} to={project.role?.end} />
            <header className="page-section">
                <div className="container mx-auto flex flex-col gap-12 outline">
                    <div className="flex flex-col gap-12">
                        <TextProjectName>{projectName}</TextProjectName>
                        <TextProjectSummary>{summary}</TextProjectSummary>
                    </div>
                    <SkillsRender
                        skills={project.skills as SkillRecord[]}
                        isVertical
                    />

                </div>
            </header>
            <section className="page-section bg-secondary">
                <div className="container p-12">
                    <ReactDatocmsImage data={cover.responsiveImage as ResponsiveImageType} className="w-full h-auto" />
                </div>
            </section>
            <div className="container flex flex-col gap-12">
                <StructuredText
                    data={project.body as CdaStructuredTextValue}
                    customNodeRules={[
                        renderNodeRule(isHeading, ({ node, children, key }) => {
                            const level = node.level;
                            const renderElement = createElement(
                                `h${level}`,
                                {
                                    className: cn("max-w-4xl w-full mx-auto", headingClass(level)),
                                    key,
                                },
                                children
                            );

                            return renderElement;
                        }),
                        renderNodeRule(isParagraph, ({ children, key }) => {
                            return (
                                <p key={key} className="max-w-4xl w-full mx-auto">
                                    {children}
                                </p>
                            );
                        }),
                        renderNodeRule(isCode, ({ node, key }) => {
                            return (
                                <SyntaxHighlighter
                                    key={key}
                                    code={node.code}
                                    language={node.language || "plaintext"}
                                />
                            );
                        }),
                    ]}
                    renderBlock={({ record }) => getBlock(record)}
                />
            </div>
            <section className="page-section">
                <div className="container">
                    <pre>{JSON.stringify(project, null, 2)}</pre>
                </div>
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
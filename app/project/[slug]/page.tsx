import { performRequest } from "@/lib/datocms";
import { PROJECT_QUERY } from "@/queries/project";


const getProjectData = async (slug: string) => await performRequest({ query: PROJECT_QUERY, variables: { slug }, revalidate: 0 });


export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const { project } = await getProjectData(slug);

    if (!project) return null;

    const { cover } = project;

    return (<div>
        <h1>Project</h1>
        <pre>{JSON.stringify(project, null, 2)}</pre>
    </div>)
}
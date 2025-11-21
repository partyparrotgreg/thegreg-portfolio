import { ProjectRecord } from "@/gql/graphql";
import { Image as ReactDatocmsImage } from "react-datocms";

import Link from "next/link";

export const ProjectCard = ({ project }: { project: ProjectRecord }) => {
    return (
        <Link href={`/project/${project.slug}`}>
            <div className="flex flex-col gap-4 hover:cursor-pointer">
                {project?.cover.responsiveImage && (
                    <div className="aspect-square w-full grid place-items-center bg-secondary p-4">
                        <ReactDatocmsImage
                            data={project.cover.responsiveImage}
                        />
                    </div>
                )}
                <div className="flex flex-row justify-between text-lg font-medium leading-5">
                    <div className="flex flex-col items-start font-heading tracking-tight">
                        <div>{project.projectName}</div>
                        <div className="opacity-50">{project.productName}</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
import { StickySection } from "../shared/sticky-section";

export const ProjectRoleBar = ({ role, company, from, to }: { role: string, company: string, from: string, to?: string }) => {
    const formattedFrom = from.split("-")[0];
    const formattedTo = to ? to.split("-")[0] : "Present";
    return (
        <StickySection>
            <div className="container flex flex-row justify-between">
                <TextRoleName role={role} company={company} />
                <div className="text-xl leading-6">
                    {formattedFrom} &mdash; {formattedTo}
                </div>
            </div>
        </StickySection>
    )
}


export const TextRoleName = ({ role, company }: { role: string, company: string }) => {
    return (
        <div className="flex flex-col md:flex-row md:gap-4 gap-0 text-xl leading-6">
            <div>{role}</div>
            <div className="opacity-50">{company}</div>
        </div>
    )
}
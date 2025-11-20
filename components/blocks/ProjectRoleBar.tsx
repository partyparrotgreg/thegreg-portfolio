import { StickySection } from "../shared/sticky-section"

export const ProjectRoleBar = () => {
    return (
        <StickySection>
            <div className="container flex flex-row justify-between text-xl">
                <div className="flex flex-col md:flex-row md:gap-4">
                    <div>Head of Design</div>
                    <div className="opacity-50">Douro Labs</div>
                </div>
                <div>
                    2024 &mdash; Present
                </div>
            </div>
        </StickySection>
    )
}
import { StickySection } from "../shared/sticky-section"

export const ProjectRoleBar = () => {
    return (
        <StickySection>
            <div className="container flex flex-row justify-between p-4">
                <div>
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
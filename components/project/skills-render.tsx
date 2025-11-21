import { SkillRecord } from "@/gql/graphql";
import { cn } from "@/lib/utils";

export const SkillsRender = ({
    skills,
    isVertical,
}: {
    skills: SkillRecord[];
    isVertical?: boolean;
}) => {
    return (
        <div className="flex flex-col gap-2">
            <div className="font-semibold">Expertise</div>
            <div className={cn(
                "justify-start items-start gap-px inline-flex ",
                isVertical ? "flex-col gap-2  text-foreground/75" : "flex-wrap"
            )}
            >
                {skills.map(({ id, name }, index) => (
                    <div
                        key={id}
                        className={cn(
                            "inline-flex items-center gap-1",
                            !isVertical && "text-foreground/50"
                        )}
                    >
                        {name}{" "}
                        {!isVertical && index !== skills.length - 1 && (
                            <span className="mx-3 opacity-25">/</span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

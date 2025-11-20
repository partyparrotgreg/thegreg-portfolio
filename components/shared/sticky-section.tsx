export const StickySection = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <section className="sticky top-0 z-50 bg-background min-h-[56px]">
            {children}
        </section>
    )
}
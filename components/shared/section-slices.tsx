export const SectionSlice = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="page-section border-b border-black">
            <div className="container mx-auto border-l border-r p-4 border-black">
                {children}
            </div>
        </section>
    )
}
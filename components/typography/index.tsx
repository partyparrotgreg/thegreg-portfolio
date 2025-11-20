export const TextH1 = ({ children }: { children: React.ReactNode }) => {
    return (
        <h1 className="text-5xl font-medium">{children}</h1>
    )
}


export const HeroTitle = ({ children }: { children: React.ReactNode }) => {
    return (
        <h1 className="text-7xl font-medium">{children}</h1>
    )
}

export const ProjectDescription = ({ children }: { children: React.ReactNode }) => {
    return (
        <p className="text-3xl font-medium font-heading tracking-tight">{children}</p>
    )
}

export const FooterText = ({ children }: { children: React.ReactNode }) => {
    return (
        <p className="text-xl font-medium">{children}</p>
    )
}
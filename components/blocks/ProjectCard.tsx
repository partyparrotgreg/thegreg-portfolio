import Image from "next/image"
import Link from "next/link"

export const ProjectCard = () => {
    return (
        <Link href={'/'}>
            <div className="flex flex-col gap-4">
                <Image src={'https://images.unsplash.com/photo-1587924656868-6fa1bfba7a64?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} width={300} height={300} alt={"Project"} className="w-full h-full object-cover max-h-full aspect-square w-full" />
                <div className="flex flex-row justify-between text-lg font-medium leading-5">
                    <div className="flex flex-col items-start font-heading tracking-tight">
                        <div>Insights Hub</div>
                        <div className="opacity-50">Pyth Network</div>
                    </div>
                    <div className="flex flex-row gap-4 text-sm">
                        <div>Tag, Tag, Tag</div>
                        <div className="opacity-50">2025</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
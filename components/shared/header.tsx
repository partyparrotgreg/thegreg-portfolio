import Link from "next/link"
import { Button } from "../ui/button"

export const Header = () => {
    return (
        <header className="flex items-center justify-center page-section absolute top-0 left-0 right-0 z-50">
            <div className="container flex flex-row justify-between">

                <Link href="/">
                    <div className="text-xl font-medium flex flex-col gap-0 leading-6">
                        <div>Greg Hadala</div>
                        <div className="opacity-50">Designer</div>
                    </div>
                </Link>
                <div className="flex gap-8">
                    <ul className="flex flex-col justify-end">
                        <li className="text-right opacity-50">Recent projects</li>
                        <li className="text-right"><Link href="/">
                            <Button variant={'link'} size={'link'}>Home</Button>
                        </Link></li>
                        <li className="text-right"><Link href="/">
                            <Button variant={'link'} size={'link'}>Home</Button>
                        </Link></li>
                        <li className="text-right"><Link href="/">
                            <Button variant={'link'} size={'link'}>Home</Button>
                        </Link></li>
                        <li className="text-right"><Link href="/">
                            <Button variant={'link'} size={'link'}>Home</Button>
                        </Link></li>

                    </ul>
                    <ul>
                        <li className="text-right opacity-50">Connect</li>
                        <li className="text-right"><Link href="/">
                            <Button variant={'link'} size={'link'}>LinkedIn</Button>
                        </Link></li>
                        <li className="text-right"><Link href="/">
                            <Button variant={'link'} size={'link'}>Twitter</Button>
                        </Link></li>
                        <li className="text-right"><Link href="/">
                            <Button variant={'link'} size={'link'}>Instagram</Button>
                        </Link></li>
                        <li className="text-right"><Link href="/">
                            <Button variant={'link'} size={'link'}>Dribbble</Button>
                        </Link></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
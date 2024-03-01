import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const navList = [
    {
        title: "Pricing",
        href: "/pricing",
    },
    {
        title: "Contact",
        href: "/contact",
    },
]

const Navigation = () => {
    return (
        <nav className="fixed w-screen px-4 top-2 z-50">
            <div className="py-3 container flex items-center justify-between bg-background rounded-md z-50">
                {/* LEFT */}
                <p>Estate</p>

                {/* CENTER */}
                <ul className="flex items-center gap-4 ">
                    {navList.map(nav => (
                        <li key={nav.title}>
                            <Link href={nav.href} className="text-muted-foreground hover:text-primary hover:underline">{nav.title}</Link>
                        </li>
                    ))}
                </ul>

                {/* RIGHT */}
                <div>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                </div>
            </div>

        </nav>
    );
}

export default Navigation;
import Link from "next/link";

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
        <nav>
            {/* LEFT */}
            <p>Estate</p>

            {/* CENTER */}
            <ul>
                {navList.map(nav => (
                    <li key={nav.title}>
                        <Link href={nav.href}>{nav.title}</Link>
                    </li>
                ))}
            </ul>

            {/* RIGHT */}
            <div>
            
            </div>

        </nav>
    );
}

export default Navigation;
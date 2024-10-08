interface NavLink {
    name: string;
    href: string;
    key: string;
}

export const navLinks: NavLink[] = [
    {   
        name: "Home", 
        href: "/",
        key: "home"
    },
    {
        name: "Services",
        href: "/services",
        key: "services"
    },
    {
        name: "About Us",
        href: "/about",
        key: "about"
    },
    {
        name: "Contact Us",
        href: "/contact",
        key: "contact"
    },
];
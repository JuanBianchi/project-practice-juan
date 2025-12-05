import Link from "next/link";
import tailwindcss from "tailwindcss";

const Footer = () => {
    return (
        <footer className="xl:w-full flex-none md:w-250">
            <p className="flex justify-center">© 2025 Juan.
                All rights reserved.
            </p>
            <div className="flex justify-center">
                <Link href="/about" className="px-4">Sobre mi</Link>
                <Link href="/contact" className="px-4">Contactame</Link>
            </div>
        </footer>
    );
};

export default Footer;

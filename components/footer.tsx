
import Link from "next/link";
import { Separator } from "./ui/separator";

const Footer = () => {
    return(
        <footer className="max-w-3xl mx-auto">
            <div className="md:flex md:justify-between">
                <div>
                    <h4 className="text-3xl font-bold my-6 md:my-0"> Lucas Cueli </h4>
                </div>
                <div className="px-2 flex justify-between md:gap-8 items-center">
                    <Link href="#about-me">About Me</Link>
                    <Link href="#skills">Skills</Link>
                    <Link href="#services">Services</Link>
                    <Link href="#portfolio">Portfolio</Link>
                    <Link href="#contact">Contact</Link>
                </div>
            </div>
            <Separator className="my-4" />
            <div>&copy; 2024 | Portfolio Web by Lucas Cueli. Made with React and NextJS | </div>
        </footer>
    );
}

export default Footer;
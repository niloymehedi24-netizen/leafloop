import Link from "next/link";
import Container from "@/components/shared/Container";
import {
    FaFacebookF,
    FaGithub,
    FaInstagram,
    FaLinkedinIn,
    FaLeaf,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300">
            <Container>
                <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">

                    {/* Brand */}
                    <div>
                        <div className="mb-5 flex items-center gap-2">
                            <FaLeaf className="text-3xl text-emerald-500" />
                            <h2 className="text-2xl font-bold text-white">
                                LeafLoop
                            </h2>
                        </div>

                        <p className="leading-7">
                            Helping people build greener homes with
                            healthy plants and simple plant care.
                        </p>

                        <div className="mt-6 flex gap-4">
                            <FaFacebookF className="cursor-pointer text-xl transition hover:text-emerald-500" />
                            <FaLinkedinIn className="cursor-pointer text-xl transition hover:text-emerald-500" />
                            <FaGithub className="cursor-pointer text-xl transition hover:text-emerald-500" />
                            <FaInstagram className="cursor-pointer text-xl transition hover:text-emerald-500" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-5 text-xl font-semibold text-white">
                            Quick Links
                        </h3>

                        <ul className="space-y-3">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/explore">Explore</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="mb-5 text-xl font-semibold text-white">
                            Support
                        </h3>

                        <ul className="space-y-3">
                            <li><Link href="#">Privacy Policy</Link></li>
                            <li><Link href="#">Terms & Conditions</Link></li>
                            <li><Link href="#">Help Center</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-5 text-xl font-semibold text-white">
                            Contact
                        </h3>

                        <div className="space-y-3">
                            <p>📍 Dhaka, Bangladesh</p>
                            <p>support@leafloop.com</p>
                            <p>+880 1700-000000</p>
                        </div>
                    </div>

                </div>

                <div className="border-t border-slate-700 py-6 text-center text-sm">
                    © {new Date().getFullYear()} LeafLoop. All rights reserved.
                </div>
            </Container>
        </footer>
    );
}
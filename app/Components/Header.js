'use client'
import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Contact", href: "#contact" },
    ];

    const socialLinks = [
        { icon: <FaGithub size={24} />, href: "https://github.com" },
        { icon: <FaLinkedin size={24} />, href: "https://linkedin.com" },
        { icon: <FaTwitter size={24} />, href: "https://twitter.com" },
    ];

    return (
        <header className="bg-gray-900 text-white py-4 px-6 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <a href="#" className="hover:text-blue-400">
                        MyPortfolio
                    </a>
                </div>

                {/* Navigation for Desktop */}
                <nav className="hidden md:flex space-x-6">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="hover:text-blue-400">
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Social Icons */}
                <div className="hidden md:flex items-center space-x-4">
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400"
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        Menu
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-gray-800 text-white py-4 px-6">
                    <nav className="space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block hover:text-blue-400"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>
                    <div className="flex items-center space-x-4 mt-4">
                        {socialLinks.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-400"
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;

"use client";
import React, { useEffect, useState } from "react";
import NavLinks from "./NavLinks";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import Link from "next/link";

const navLinks = [
    {
        title: 'Home',
        path: "#home",
    },
    {
        title: 'About',
        path: "#about",
    },
    {
        title: 'Projects',
        path: "#project",
    },
    {
        title: 'Contact',
        path: '#contact',
    }
];

const NavBar = () => {
    const { scrollY } = useScroll();
    const [isFloating, setIsFloating] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollY.current > 50) {
                setIsFloating(true);
            } else {
                setIsFloating(false); // Set isFloating to false when scrolling back up
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollY]);

    return (
        <AnimatePresence>
            {!isFloating ? (
                <nav className="absolute top-0 left-0 right-0 z-10 px-10">
                    <div className="flex flex-wrap justify-between items-center mx-auto px-6 py-3 bg-[#12121212] bg-opacity-100">
                        <Link href={'/'} className="text-2xl md:text-5xl text-white font-semibold">
                            Logo
                        </Link>
                        <div className="menu hidden md:block md:w-auto" id="navbar">
                            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-6 mt-0">
                                {navLinks.map((link, index) => (
                                    <li key={index}>
                                        <NavLinks href={link.path} title={link.title} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </nav>
            ) : (
                <motion.div
                    initial={{
                        opacity: 0,
                        y: -30,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.2,
                    }}
                    className="mobile-menu flex w-fit fixed top-10 inset-x-0 mx-auto border border-white/[0.2] rounded-full bg-[#12121212] shadow z-[5000] lg:pr-3 lg:pl-3 lg:py-3 md:p-4 items-center justify-center space-x-4 "
                >
                    {navLinks.map((link, index) => (
                        <NavLinks key={index} href={link.path} title={link.title} />
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default NavBar;

"use client"; // Ensures that the code only runs in the client-side environment in Next.js.
import React, { useEffect, useState } from "react"; // Importing React hooks for managing state and lifecycle.
import NavLinks from "./NavLinks"; // Importing a custom component for navigation links.
import { motion, AnimatePresence, useScroll } from "framer-motion"; // Importing Framer Motion for animations and scroll handling.
import Link from "next/link"; // Importing Link from Next.js for client-side routing.

// Data array containing the navigation links.
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
    const { scrollY } = useScroll(); // useScroll hook from Framer Motion to get scroll position.
    const [isFloating, setIsFloating] = useState(false); // State to manage whether the nav is in "floating" mode.

    // Effect hook to add and remove the scroll event listener.
    useEffect(() => {
        const handleScroll = () => {
            if (scrollY.current > 50) { // If scrolled more than 50 pixels.
                setIsFloating(true); // Set navbar to floating mode.
            } else {
                setIsFloating(false); // Reset navbar to non-floating mode when scrolled back up.
            }
        };

        // Add scroll event listener to window.
        window.addEventListener("scroll", handleScroll);
        // Cleanup function to remove the event listener.
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollY]);

    return (
        <AnimatePresence>
            {!isFloating ? ( // Render this nav if not in floating mode.
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
                                    </li> // Mapping over navLinks to render each as NavLinks component.
                                ))}
                            </ul>
                        </div>
                    </div>
                </nav>
            ) : ( // Render this floating nav bar when in floating mode.
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
                        duration: 0.2, // Transition settings for the animation.
                    }}
                    className="mobile-menu flex w-fit fixed top-10 inset-x-0 mx-auto border border-white/[0.2] rounded-full bg-[#12121212] shadow z-[5000] lg:pr-3 lg:pl-3 lg:py-3 md:p-4 items-center justify-center space-x-4 "
                >
                    {navLinks.map((link, index) => (
                        <NavLinks key={index} href={link.path} title={link.title} />
                    ))}    {/*  Rendering each navigation link in floating mode. */}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default NavBar; // Exporting the NavBar component for use elsewhere in the application.

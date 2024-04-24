import React from 'react';
import Link from 'next/link'; // Importing the Link component from Next.js for navigation.
import AnimateText from './animations/AnimateText'; // Importing a custom animation component for animating text.
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Importing Font Awesome icons for GitHub and LinkedIn.
import { CiMail } from "react-icons/ci"; // Importing a mail icon from react-icons library.

const Contact = () => {
  return (
    // Main contact section container
    <section id="contact" className='h-full w-full py-24 flex items-center justify-center'>
        <div className='container mx-auto'>
            <div className='flex flex-col lg:flex-row justify-center items-center'> 
                <div className='text-center'> 
                    <h2 className='text-[40px] lg:text-[50px] text-white tracking-wide leading-none mb-12'> 
                        <AnimateText/> {/*  Component that likely animates text content, details not shown. */} 
                    </h2>
                    <div className='socials flex flex-row justify-center gap-4'>
                        {/* GitHub link with icon */}
                        <Link 
                            href='https://github.com/alexchavez01'
                            target="__blank" 
                        >
                            <FaGithub
                                alt="GitHub Logo"
                                className='h-[50px] w-[50px] inline-block'
                            />
                        </Link>

                        { /* LinkedIn link with icon */ }
                        <Link 
                            href='https://www.linkedin.com/in/alex-chavez30/'
                            target="__blank"
                        >
                            <FaLinkedin
                                className='h-[50px] w-[50px] inline-block'
                                alt="LinkedIn Icon" 
                            />
                        </Link>

                        { /* Mail to link with a mail icon for emailing directly */ }
                        <a href="mailto:Alexander.chavez4378@gmail.com" className="inline-block">
                            <CiMail 
                                className="h-[50px] w-[50px]" 
                                alt="Mail Icon" 
                            />
                        </a>

                    </div>
                </div>    
            </div>
        </div>
    </section>
  );
}

export default Contact; 

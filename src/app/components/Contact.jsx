import React from 'react';
import Link from 'next/link';
import AnimateText from './animations/AnimateText';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

const Contact = () => {
  return (
    <section id="contact" className='h-full w-full py-24 flex items-center justify-center'>
        <div className='container mx-auto'>
            <div className='flex flex-col lg:flex-row justify-center items-center'> 
                <div className='text-center'> 
                    <h2 className='text-[40px] lg:text-[50px] text-white tracking-wide leading-none mb-12'> 
                        <AnimateText/>
                    </h2>
                    <div className='socials flex flex-row justify-center gap-4'>

                        <Link href='https://github.com/alexchavez01'>
                            <FaGithub
                                alt="GitHub Logo"
                                className='h-[50px] w-[50px] inline-block'

                            />

                            
                        </Link>

                        <Link href='https://www.linkedin.com/in/alex-chavez30/'>
                            <FaLinkedin
                                className='h-[50px] w-[50px] inline-block'
                                alt="LinkedIn Icon" 
                            />
                          
                        </Link>

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

"use client";
import React from "react";
import Image from "next/image";
import {TypeAnimation} from "react-type-animation";


const HeroSection = () => {
    return (
        <section className="h-full w-full py-16" id="home">
            <div className="grid grid-cols-1 md:grid-cols-12">
            <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
                <h1 className="text-white mb-4 text-5xl sm:text-5xl lg:text-5xl font-extrabold"> 
                    <span className="text-transparent text-white">
                        Hello, I'm {" "} <br />
                    </span>
                    <TypeAnimation 
                        className=" text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600" //maybe here or with text above
                        sequence={[
                            "Alex",
                            1000,
                            "Web Developer",
                            1000,
                            "Software Engineer",
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptuous.
                </p>
                <div>
                    <button className="px-5 py-2 w-[7] rounded-full mr-4 bg-transparent hover:bg-slate-800 text-white border border-white mt-3">
                        <a href="/public/downloads/Resume-alex.pdf" download="Resume-alex.pdf"> Resume </a>
                    </button>
                </div>
            </div>


                        
            <div className="col-span-4 place-self-center mt-10 lg:mt-5">
                <div className="rounded-full bg-[#181818] w-[275px] h-[275px] lg:w-[300px] lg:h-[300px] relative">
                    <img
                        src="images/hero-image.webp"
                        alt="hero image"
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={200}
                        height={200}
                    />  
                </div>
            </div>
        </div>
    </section>



    )
}

export default HeroSection;
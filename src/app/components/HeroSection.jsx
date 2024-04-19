// "use client"; // Specifies that this module should only be executed in the client environment.
// import React from "react"; // Importing React library for building the component.
// import { TypeAnimation } from "react-type-animation"; // Importing TypeAnimation component to animate text.
// import { motion } from 'framer-motion'; // Importing motion component from Framer Motion for animations.

// const HeroSection = () => {
//     return (
//         <section className="h-full w-full py-16" id="home"> {/* Full height, full width section with padding. */}
//             <div className="grid grid-cols-1 md:grid-cols-12 "> {/* Responsive grid layout. */}
//                 <div className="col-span-9 md:col-span-11 place-self-center text-center sm:text-left justify-self-start " style={{ whiteSpace: 'nowrap' }}>
//                     <h1 className="text-white mb-4 ml-2 text-5xl sm:text-5xl lg:text-6xl font-extrabold"> 
//                         <span className="text-transparent text-white">
//                             Hello, I'm {" "} <br /> 
//                         </span>
//                         <TypeAnimation 
//                             className=" text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600" 
//                             sequence={[
//                                 "Alex Chavez", // Name displayed first.
//                                 1000, // Pause for 1000ms.
//                                 "Web Developer", // Second text displayed.
//                                 1000, // Pause for 1000ms.
//                                 "Software Engineer", // Third text displayed.
//                                 1000 // Pause for 1000ms.
//                             ]}
//                             wrapper="span"
//                             speed={50}
//                             repeat={Infinity} // Animation repeats indefinitely.
//                         />
//                     </h1>
//                     <p className="text-[#ADB7BE] text-base sm:text-md mb-6 mt-3 lg:text-lg">
//                         Just a CS student trying to become something more. 
//                     </p>
//                     <div>
//                         <button className="px-5 py-2 w-[7] rounded-full mr-4 bg-transparent hover:bg-slate-800 text-white border border-white mt-3">
//                             <a href="downloads/Resume-alex.pdf" download="Resume-alex.pdf">Resume</a> {/* Download link for resume. */}
//                         </button>
//                     </div>
//                 </div>

//                 {/* Avatar section with draggable functionality and corner markers */}
//                 <div className="col-span-1 place-self-center mt-10 lg:mt-5">  

//                     <div className="absolute top-[9rem] right-[8rem] text-gray-600">
//                         Drag </div> {/* Top-left corner */}   

//                     <motion.div
//                         drag // Enables dragging of the component.
//                         dragConstraints={{ left: -200, right: 200, top: -50, bottom: 300 }} // Limits drag area.
//                         className="avatar-container rounded-full bg-white w-[275px] h-[275px] lg:w-[300px] lg:h-[300px] relative"
//                         >
//                         {/* Corner markers */}
//                         <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gray-200 w-2 h-2 rounded-full"></div> {/* Top-left corner */}
//                         <div className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 w-2 h-2 rounded-full"></div> {/* Top-right corner */}
//                         <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-200 w-2 h-2 rounded-full"></div> {/* Bottom-left corner */}
//                         <div className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 w-2 h-2 rounded-full"></div> {/* Bottom-right corner */}
                        
                        
//                         <img
//                             src="images/avatar.png"
//                             alt="hero image"
//                             className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
//                             width={170}
//                             height={170}
//                         /> {/* Image positioned centrally within the container. */}
//                     </motion.div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default HeroSection; // Exporting the HeroSection component for use in other parts of the application.

"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <section className="h-full w-full py-16" id="home" >
            <div className="flex flex-col justify-items-center place-self-center text-center">
                <h1 className="text-white mb-4 ml-2 text-[4vw] sm:text-5xl lg:text-6xl font-extrabold">
                    <span className="text-transparent text-white">
                        Hello, I'm {" "} <br />
                    </span>
                    <TypeAnimation 
                        className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600" 
                        sequence={[
                            "Alex Chavez", // Name displayed first.
                            1000, // Pause for 1000ms.
                            "Web Developer",
                            1000,
                            "Software Engineer", // Second text displayed.
                            1000 // Pause for 1000ms.
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity} // Animation repeats indefinitely.
                    />
                </h1>
                <p className="text-[#ADB7BE] text-[3vw] sm:text-md mb-6 mt-3 lg:text-lg">
                    Just a CS student trying to become something more.
                </p>
                <div>
                    <button className="px-5 py-2 w-auto rounded-full mr-4 bg-transparent hover:bg-slate-800 text-white border border-white mt-3">
                        <a href="downloads/Resume-alex.pdf" download="Resume-alex.pdf">Resume</a>
                    </button>
                </div>
            </div>

            {/* Avatar section with draggable functionality */}
            <div className="mt-10 lg:mt-5 flex items-center justify-center">
                <motion.div
                    drag 
                    dragConstraints={{ left: -350, right: 300, top: -150, bottom: 300 }}
                    className="avatar-container rounded-full bg-white w-[275px] h-[275px] lg:w-[300px] lg:h-[300px] relative"
                >
                    <img
                        src="images/avatar.png"
                        alt="hero image"
                        className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                        width={170}
                        height={170}
                    />
                </motion.div>
            </div>
        </section>
    )
}

export default HeroSection;

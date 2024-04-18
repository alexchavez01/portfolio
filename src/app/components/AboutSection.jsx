"use client"; // Ensures that this component is executed on the client side in a Next.js application.
import React, { useTransition, useState } from "react"; // Imports necessary React hooks.
import TabButton from "./TabButton"; // Imports a custom button component for tab functionality.
import ChangText from "./animations/Anime"; // Imports a custom animation component, likely for text animation.

// Array containing data for each tab in the about section.
const TAB_DATA = [
    {
        title: 'Skills',
        id: 'skills', 
        content: (  // Content for the 'Skills' tab.
            <ul className = "flex flex-wrap mx-10 justify-center sm:justify-start">
                {/* List of skills with hover effect and styling */}
                <li className="px-2 py-2 rounded-full mr-2 mb-2 bg-transparent hover:bg-slate-900 text-white border border-white mt-3">
                    React</li>
                <li className="px-2 py-2 rounded-full mr-2 mb-2 bg-transparent hover:bg-slate-900 text-white border border-white mt-3">
                    Javascript</li>
                <li className="px-3 py-2 rounded-full mr-2 mb-2 bg-transparent hover:bg-slate-900 text-white border border-white mt-3">
                    MySql</li>
                <li className="px-4 py-2 rounded-full mr-2 mb-2 bg-transparent hover:bg-slate-900 text-white border border-white mt-3">
                    Java</li>
                <li className="px-4 py-2 rounded-full mr-2 mb-2 bg-transparent hover:bg-slate-900 text-white border border-white mt-3">
                    Python</li>
                <li className="px-4 py-2 rounded-full mr-2 mb-2 bg-transparent hover:bg-slate-900 text-white border border-white mt-3">
                    C/C++</li>
             </ul>
        ),
    }, 
    {
        title: 'Education',
        id: 'education',
        content: (  // Content for the 'Education' tab.
            <ul className= "flex flex-wrap mx-10 justify-center sm:justify-start">
                {/* List of educational qualifications with styling and hover effect */}
                <li className="px-5 py-2 rounded-full mr-2 mb-2 bg-transparent hover:bg-slate-900 text-white border border-white mt-3">
                    The College of Wooster 
                </li>
                <li className="px-5 py-2 rounded-full mr-2 mb-2 bg-transparent hover:bg-slate-900 text-white border border-white mt-3">
                    Wooster, Ohio
                </li> 
                <li className="px-5 py-2 rounded-full mr-2 mb-2 bg-transparent hover:bg-slate-900 text-white border border-white mt-3">
                    Computer Science
                </li>
            </ul>
        ),
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills"); // State to keep track of the current active tab.
    const [ isPending, startTransition] = useTransition(); // UseTransition for managing state transitions smoothly.

    const handleChangeTab = (id) => { // Function to handle tab changes.
        startTransition (() => {
            setTab(id); // Set the current tab, wrapped in transition for better performance.
        });
    }

    return (
        <section className="flex py-20 mt-24 mb-10 text-white" id="about">
            <div className="sm:grid sm:grid-cols-2 gap-8 items-center py-8 xl:gap-16 sm:py-16">
                <div className="text-left flex flex-col h-full"> 
                    <h2 className="flex text-4xl font-bold text-white mb-4"> 
                           <ChangText></ChangText>  {/* Animated text component for visual effect. */}
                     </h2>
                    <p className="mt-3">
                        Hello, I am Alex. I am currently a student at The College of Wooster. Pursuing a degree in Computer Science. As of now I am 
                        currently trying to master the art of creating aesthetically pleasing, yet very functional websites. 
                        I have knowledge in various software domains beyond web development. 
                    </p>
                </div>
                <div className="mt-4 sm:mt-0 flex flex-col items-center h-full order-last md:order-none">
                    <div className="flex flex-wrap items-end mt-8">
                        {/* Tab buttons for switching between Skills and Education */}
                        <TabButton selectTab={() => handleChangeTab("skills")} active={tab === "skills"}> 
                        {" "} Skills {" "} </TabButton>

                        <TabButton selectTab={() => handleChangeTab("education")} active={tab === "education"}> 
                        {" "} Education {" "} </TabButton>
                    </div>
                    <div className="mt-5"> {TAB_DATA.find((t) => t.id === tab).content}</div>  {/* Display content of the currently active tab. */}

                </div>
            </div>
        </section>
    );
}

export default AboutSection;

"use client";
import React, {useTransition, useState} from "react";
import TabButton from "./TabButton";
import ChangText from "./animations/Anime";





const TAB_DATA = [
    {
        title: 'Skills',
        id: 'skills', 
        content: (
                <ul className = "flex flex-wrap mx-10 justify-center sm:justify-start">
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
        content: (
            <ul className= "flex flex-wrap mx-10 justify-center sm:justify-start">
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
    const [tab, setTab] = useState("skills");
    const [ isPending, startTransition] = useTransition();

    const handleChangeTab = (id) => {
        startTransition (() => {
            setTab(id);
        });
    }

    return (
        <section className="flex py-20 mt-24 mb-10 text-white" id="about">
            <div className="sm:grid sm:grid-cols-2 gap-8 items-center py-8 xl:gap-16 sm:py-16">
                <div className="text-left flex flex-col h-full"> 
                    <h2 className="flex text-4xl font-bold text-white mb-4"> 
                           <ChangText></ChangText>
                     </h2>
                    <p className="mt-3">
                        
                        Hello, I am Alex. I am currently a student at The College of Wooster. Pursuing a degree in Computer Science. As of now I am 
                        currently trying to master the art of creating aesthically pleasing, but yet very functional websites. 
                        I have knowledge in various software domains beyond web development. 
                    </p>
                </div>
                <div className="mt-4 sm:mt-0 flex flex-col items-center h-full order-last md:order-none">
                    <div className="flex flex-wrap items-end mt-8">
                        <TabButton selectTab={() => handleChangeTab("skills")} active={tab === "skills"}> 
                        {" "} Skills {" "} </TabButton>

                        <TabButton selectTab={() => handleChangeTab("education")} active={tab === "education"}> 
                        {" "} Education {" "} </TabButton>
                    </div>
                    <div className="mt-5"> {TAB_DATA.find((t) => t.id === tab).content}</div>

                </div>
            </div>
        </section>
    );
}

export default AboutSection;
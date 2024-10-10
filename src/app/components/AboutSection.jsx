"use client"; // Ensures that this component is executed on the client side in a Next.js application.
// import React, { useTransition, useState } from "react"; // Imports necessary React hooks.
// import TabButton from "./TabButton"; // Imports a custom button component for tab functionality.
// import ChangText from "./animations/Anime"; // Imports a custom animation component, likely for text animation.

// // Array containing data for each tab in the about section.
// const TAB_DATA = [
//     {
//         title: 'Skills',
//         id: 'skills', 
//         content: (  // Content for the 'Skills' tab.
//             <ul className = "flex flex-wrap mx-10 justify-center sm:justify-start">
//                 {/* List of skills with hover effect and styling */}
//                 <li className="px-2 py-2 rounded-full mr-2 mb-2 bg-transparent hover:bg-slate-900 text-white border border-white mt-3">
//                     React</li>
//                 <li className="px-2 py-2 rounded-full mr-2 mb-2 bg-transparent hover:bg-slate-900 text-white border border-white mt-3">
//                     Javascript</li>
//                 <li className="px-3 py-2 rounded-full mr-2 mb-2 bg-transparent hover:bg-slate-900 text-white border border-white mt-3">
//                     MySql</li>
//                 <li className="px-4 py-2 rounded-full mr-2 mb-2 bg-transparent hover:bg-slate-900 text-white border border-white mt-3">
//                     Java</li>
//                 <li className="px-4 py-2 rounded-full mr-2 mb-2 bg-transparent hover:bg-slate-900 text-white border border-white mt-3">
//                     Python</li>
//                 <li className="px-4 py-2 rounded-full mr-2 mb-2 bg-transparent hover:bg-slate-900 text-white border border-white mt-3">
//                     C/C++</li>
//              </ul>
//         ),
//     }, 
//     {
//         title: 'Education',
//         id: 'education',
//         content: (  // Content for the 'Education' tab.
//             <ul className= "flex flex-wrap mx-10 justify-center sm:justify-start">
//                 {/* List of educational qualifications with styling and hover effect */}
//                 <li className="px-5 py-2 rounded-full mr-2 mb-2 bg-transparent hover:bg-slate-900 text-white border border-white mt-3">
//                     The College of Wooster 
//                 </li>
//                 <li className="px-5 py-2 rounded-full mr-2 mb-2 bg-transparent hover:bg-slate-900 text-white border border-white mt-3">
//                     Wooster, Ohio
//                 </li> 
//                 <li className="px-5 py-2 rounded-full mr-2 mb-2 bg-transparent hover:bg-slate-900 text-white border border-white mt-3">
//                     Computer Science
//                 </li>
//             </ul>
//         ),
//     },
// ];

// const AboutSection = () => {
//     const [tab, setTab] = useState("skills"); // State to keep track of the current active tab.
//     const [ isPending, startTransition] = useTransition(); // UseTransition for managing state transitions smoothly.

//     const handleChangeTab = (id) => { // Function to handle tab changes.
//         startTransition (() => {
//             setTab(id); // Set the current tab, wrapped in transition for better performance.
//         });
//     }

//     return (
//         <section className="flex py-20 mt-24 mb-10 text-white" id="about">
//             <div className="sm:grid sm:grid-cols-2 gap-8 items-center py-8 xl:gap-16 sm:py-16">
//                 <div className="text-left flex flex-col h-full"> 
//                     <h2 className="flex text-4xl font-bold text-white mb-4"> 
//                            <ChangText></ChangText>  {/* Animated text component for visual effect. */}
//                      </h2>
//                     <p className="mt-3">
//                         Hello, I am Alex. I am currently a student at The College of Wooster. Pursuing a degree in Computer Science. As of now I am 
//                         currently trying to master the art of creating aesthetically pleasing, yet very functional websites. 
//                         I have knowledge in various software domains beyond web development. 
//                     </p>
//                 </div>
//                 <div className="mt-4 sm:mt-0 flex flex-col items-center h-full order-last md:order-none">
//                     <div className="flex flex-wrap items-end mt-8">
//                         {/* Tab buttons for switching between Skills and Education */}
//                         <TabButton selectTab={() => handleChangeTab("skills")} active={tab === "skills"}> 
//                         {" "} Skills {" "} </TabButton>

//                         <TabButton selectTab={() => handleChangeTab("education")} active={tab === "education"}> 
//                         {" "} Education {" "} </TabButton>
//                     </div>
//                     <div className="mt-5"> {TAB_DATA.find((t) => t.id === tab).content}</div>  {/* Display content of the currently active tab. */}

//                 </div>
//             </div>
//         </section>
//     );
// }

// export default AboutSection;


import React from 'react';

export default function AboutSection() {
  return (
    <div id="about" > 
    <div className="min-h-screen bg-black text-white p-10" >
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-6 relative">
            About Me
            <span className="absolute bottom-0 left-0 w-full h-[.2rem] bg-gradient-to-r from-blue-400 to-purple-600"></span>
          </h1>
          <p className="max-w-3xl text-center text-lg mb-6">
            I'm a <span className="font-bold">Software Engineer</span> building easy-to-use and high-performing applications. Check out some of my work in the Projects section!
          </p>
          <p className="max-w-3xl text-center text-lg mb-6">
           I’m highly adaptive and love to learn, especially when it comes to problem-solving, coding, and creating tangible projects through design. Sharing knowledge with my peers is something I truly enjoy as well.          </p>
          <p className="max-w-3xl text-center text-lg mb-6">
            I’m always enthusiastic about learning and adapting to new experiences, and I thrive on embracing new challenges.         
          </p>
        </div>

        {/* Skills Section */}
        <div className="grid grid-cols-2 gap-10 mt-10">
          <div className="space-y-6">
            <h2 className="flex justify-center text-2xl font-bold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-4">
              {['C++', 'C#', 'JavaScript', 'Python', 'React.js', 'TailWindCSS', 'Node.js', 'TensorFlow', 'MySQL', 'Unity', 'Git', 'GitHub', 'React', 'HTML', 'CSS'].map(skill => (
                <div key={skill} className="bg-gradient-to-r from-blue-400 to-purple-600 text-white px-3 py-1.5 w rounded 
                 transition-transform duration-100 transform hover:translate-y-1 hover:scale-110 hover:bg-gradient-to-l hover:from-[#ED1E79] hover:to-[#662D8C] hover:shadow-lg
                 hover:skew-y-2 hover:skew-x-1.3">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="flex justify-center text-2xl font-bold mb-4">Soft Skills</h2>
            <div className="flex flex-wrap gap-4">
              {["Ambitious", "Collaboration", "Efficient", "Communication", "Adaptable", "Analytical Thinking", "Creativity", "Critical Thinking", "Empathy", "Teamwork", "Resilience", "Time Management", "Problem-Solving", "Open-Mindedness", "Decision-Making", 
               "Active Listening", "Patience", "Resourcefulness", "Self-Motivation"].map(skill => (
                <div key={skill} className="bg-gradient-to-r from-[#662D8C] to-[#ED1E79] text-white px-3 py-1.5 w rounded
                transition-transform duration-100 transform hover:translate-y-1 hover:scale-110 hover:bg-gradient-to-l hover:from-purple-600 hover:to-blue-400 hover:shadow-lg">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

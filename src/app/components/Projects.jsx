import React from 'react';
import Procard from './procard';  // Component for displaying a specific styled project card.

// Functional component to display a section of projects.
const Projects = () => {
  return (
    <section id="project">   {/*  Section element with an ID used for linking or styling purposes. */}
      <div className='flex flex-col items-center justify-center py-20 '>  {/* Flex container to center content vertically and set padding. */}
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-700 py-20'>
          My Projects 
        </h1>
        <div className='h-full w-full flex flex-col items-center justify-center md:flex-row gap-10 px-10'>
          {/* Flex container to arrange child components, switches to row in medium devices. */}
          <Procard
              src="images/image2.png"  // Source path for the project image.
              title="Flask Website"  // Title of the project.
              description= "Deployed a Python Website"  // Short description of the project.
          />
          <Procard
              src="images/image2.png"  
              title="PyGame"  
              description="A game developed using Python's PyGame library" 
          />
          <Procard
              src="images/image2.png"  
              title="Portfolio Webiste" 
              description="Your lookin at it"
          />
        </div>
      </div>
    </section>
  );
}

export default Projects; // Exporting the Projects component for use in other parts of the application.

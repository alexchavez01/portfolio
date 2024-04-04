import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <section id="project">
        <div className='flex flex-col items-center justify-center py-20'> 
            <h1 className=' text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-700 py-20'>
                My Projects
            </h1>
            <div className='h-full w-full flex flex-col items-center justify-center md:flex-row gap-10 px-10'>
                <ProjectCard
                    src = "/images/image2.png"
                    title = "Flask Website"
                    description = "Deployed a Python Website"
                    />
                <ProjectCard
                    src = "/images/image2.png"
                    title = "PyGame"
                    description = "Hamburger"
                    />
                <ProjectCard
                    src="/images/image2.png" 
                    title = "App"
                    description = "Created App"
                    />
            </div>
        </div>
    </section>
  )
}

export default Projects
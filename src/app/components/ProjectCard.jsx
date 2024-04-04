import React from 'react'
import Image from 'next/image';



const ProjectCard = ({src, title, description}) => {
  return (
    <div className='relative justify-center overflow-hidden rounded-lg shadow border border-[#311c5a]'>

        <Image
            src={src}
            width = {300}
            height = {300}
            className = 'w-full h-full object-contain'
            />
        
        <div className='relative p-4'>
            <h2 className='text-2xl font-semibold text-white '> {title} </h2>
            <p className='mt-2 text-grey-300'> {description} </p>
        </div>
     </div>

  )
}

export default ProjectCard;
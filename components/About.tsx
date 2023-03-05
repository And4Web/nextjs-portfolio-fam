import React from 'react'
import Image from 'next/image';
import {motion} from 'framer-motion';

import image from '../public/images/ninja-coder.png';

type Props = {}

function About({}: Props) {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className='h-screen flex flex-col relative text-center justify-evenly items-center md:text-left md:flex-row max-w-7xl px-10 mx-auto'>
      <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>   
      <motion.div
        initial={{
          x: -200,
          opacity: 0
        }}
        whileInView={{
          x: 0,
          opacity: 1
        }}
        transition={{
          duration: 1.2
        }}
        viewport={{
          once: true
        }}
        className='-mb-20 md:mb-0 flex-shrink-0 w-20 h-20 rounded-full object-cover md:rounded-lg md:w-64 md:h-96'
      >
      <Image src={image} height={250} width={250} alt='about Image'/>   
      </motion.div>

      <div className='space-y-5 px-0 md:px-10'>
        <h4 className='text-2xl font-semibold text-center'>Introduction is <span className='underline decoration-[#F7AB0A]/40'>visible</span> here:</h4>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis omnis illum eligendi consectetur necessitatibus magni debitis, cum recusandae culpa corrupti vitae non veritatis a. Quos natus officiis, iste minima esse sed officia numquam facilis recusandae laudantium provident laborum dignissimos aperiam perspiciatis possimus.  
          
          
        </p>
      </div>
    </motion.div>
  )
}

export default About
import React from 'react';
import {motion} from 'framer-motion';
import Image from 'next/image';

import image from '../public/images/ninja-coder.png';

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-6 flex-shrink-0 w-[250px] md:w-[300px] xl:w-[350px] border border-gray-300 m-1 h-96'>
      <motion.div initial={{y: -100, opacity: 0}} transition={{duration: 1.2}} whileInView={{y: 0, opacity: 1}} viewport={{once: true}} className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center">
        <Image src={image} height={100} width={100} alt='experience1'/>
      </motion.div>
      <div className='px-0 md:px-10'>
        <h4 className='text-3xl font-light'>CEO of AND4Web</h4>
        <p className='font-bold text-2xl mt-1'>And4Web</p>
        <div className='flex flex-row'>
          <div className='h-10 w-10 rounded-full'><Image src={image} height={40} width={40} alt='tech'/></div>
          <div className='h-10 w-10 rounded-full'><Image src={image} height={40} width={40} alt='tech'/></div>
          <div className='h-10 w-10 rounded-full'><Image src={image} height={40} width={40} alt='tech'/></div>
          {/* Tech used */}
          {/* Tech used */}
          {/* Tech used */}
        </div>
        <p className='uppercase py-5 text-gray-300'>Started work... - Ended...</p>
        <ul className='list-disc space-y-1 ml-5 text-lg'>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard
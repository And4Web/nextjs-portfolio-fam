import React from 'react';
import { SocialIcon } from 'react-social-icons';
import {motion} from 'framer-motion';

type Props = {}

function Header({}: Props) {
  return (
    <header className='sticky p-2 top-0 flex items-start justify-between max-w-6xl mx-auto xl:items-center'>
      <motion.div 
      initial={{
        x: -500,
        opacity: 0,
        scale: 0.5
      }}
      animate= {{
        x: 0,
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration: 1.5
      }}
      className='flex flex-row items-center'>
        {/* Social Icons */}
        <SocialIcon url="https://www.linkedin.com/in/And4Web" network='linkedin' bgColor="transparent" fgColor='gray' />
        <SocialIcon url="" network="twitter" bgColor="transparent" fgColor="gray" />
        <SocialIcon url="" network="github" bgColor="transparent" fgColor="gray" />       
        <SocialIcon url="" network="codepen" bgColor="transparent" fgColor='gray' />        
        <SocialIcon url="" network="telegram" bgColor="transparent" fgColor="gray" />
        {/* <SocialIcon url="" network="upwork" bgColor='white' fgColor='gray' />        */}
      </motion.div>

      <motion.div 
      initial={{
        x: 500,
        opacity: 0,
        scale: 0.5
      }}
      animate= {{
        x: 0,
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration: 1.5
      }}
      className='flex flex-row items-center text-gray-300 cursor-pointer'>
        <SocialIcon network="email"bgColor="transparent" fgColor='gray' />
        <p className='uppercase hidden md:inline-flex text-sm text-gray-500'>Get in touch</p>
      </motion.div>
    </header>
  )
}

export default Header
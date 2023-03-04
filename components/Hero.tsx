import React from 'react'
import {Cursor, useTypewriter} from 'react-simple-typewriter'

import BackgroundCircles from './BackgroundCircles'

type Props = {}

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Full Stack Development", 
      "Interactive FrontEnd",
      "Secure and Scalable BackEnd",
      "Database Management",
      "Cross-platform Mobile Apps"
    ],
    loop: true,
    delaySpeed: 2000
  })

  return (
    <div>
      <BackgroundCircles/>
      <h1>
        <span>{text}</span>
        <Cursor cursorColor='red'/>
      </h1>
    </div>
  )
}

export default Hero
import React from 'react'

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <div className='relative flex justify-center items-center'>
      <div className='absolute mt-72 border border-gray-720 rounded-full h-[200px] w-[200px] animate-ping'/>
      <div className='absolute mt-72 border border-gray-500 rounded-full h-[400px] w-[400px] opacity-30'/>
      <div className='absolute mt-72 border border-gray-400 rounded-full h-[500px] w-[500px] '/>
      <div className='absolute mt-72 border border-gray-300 rounded-full h-[600px] w-[600px] opacity-20'/>
      <div className='absolute mt-72 border border-gray-200 rounded-full h-[650px] w-[650px]  '/>
    </div>
  )
}

export default BackgroundCircles
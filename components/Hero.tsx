import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";

import BackgroundCircles from "./BackgroundCircles";
import bannerImage from "./../public/images/ninja-coder.png";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi! I'm Anand",
      "I create",
      "Interactive FrontEnd",
      "Secure and Scalable BackEnd",
      "Database Management",
      "Cross-platform Mobile Apps",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-3 justify-center text-center overflow-hidden ">
      <BackgroundCircles />
      <div className="relative rounded-full h-32 w-32 mx-auto object-cover">
        <Image src={bannerImage} width={150} height={150} alt="display pic" />
      </div>
      <h1 className="text-sm uppercase text-gray-500 tracking-[10px] lg:text-2xl">
        Full Stack Developer
      </h1>
      <h2 className="text-lg tracking-widest font-semibold scroll-px-10">
        <span>{text}</span>
        <Cursor cursorColor="red" />
      </h2>

      <div className="pt-5 z-20">
        <Link href="#About">
          <button className="heroButton">About</button>
        </Link>
        <Link href="#experience">
          <button className="heroButton">Experience</button>
        </Link>
        <Link href="#skills">
          <button className="heroButton">Skills</button>
        </Link>
        <Link href="#projects">
          <button className="heroButton">Projects</button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;

import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="text-white h-screen bg-gray-800 snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Anand Shukla</title>
      </Head>
      
      {/* Header */}
      <Header/>
      {/* Hero */}
      <section id="hero" className=" snap-start">
        <Hero/>
      </section>      
      
      {/* About */}
      <section id="about" className="snap-center">
        <About/>
      </section>
          
      {/* Experience */}
      <section id="experience" className="snap-center">
        <Experience/>
      </section>
      {/* 1:38:00 onwards... */}
      
      {/* Skills */}
      
      
      {/* Projects */}
      
      
      {/* Contact Me */}
      
      
      {/* Footer */}
    </div>
  );
}

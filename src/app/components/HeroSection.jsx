"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 px-4 sm:px-8 lg:px-16">
        {/* Text Section */}
        <div className="col-span-12 sm:col-span-8 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-500">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Adithya Rachmadhani Permana",
                1000,
                "FrontEnd",
                1000,
                "UI/UX Designer",
                1000,
                "Game Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#E0BFBF] text-sm sm:text-lg lg:text-xl mb-6">
            Failure is a process to success
          </p>
          <div className="flex flex-col sm:flex-row items-center sm:items-start">
            <Link
              href="/#contact"
              className="px-6 py-3 w-full sm:w-auto rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-cyan-500 hover:bg-blue-600 text-white mb-4 sm:mb-0 sm:mr-4"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-1 py-1 w-full sm:w-auto rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-cyan-500 hover:bg-black text-white"
            >
              <span className="block bg-[#121212] hover:bg-black rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </div>

        {/* Image with Hover Zoom and Blue Glow Effect */}
        <div className="relative w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] lg:w-[400px] lg:h-[400px] overflow-hidden rounded-full group transition-transform duration-500 transform hover:scale-110">
          {/* Blue Glow Effect */}
          <div
            className="absolute inset-0 rounded-full bg-blue-500 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ filter: "blur(40px)" }}
          ></div>
          {/* Image with Hover Effect */}
          <Image
            src="/aditu.jpeg"
            alt="hero image"
            className="rounded-full object-cover"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

"use client";
import React, { useTransition, useState, useRef } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion, useInView } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-4 text-gray-100">
        <li>HTML</li>
        <li>NextJS</li>
        <li>CSS</li>
        <li>PHP</li>
        <li>Tailwind</li>
        <li>JavaScript</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-4 text-gray-100">
        <li>SMKN 21 Jakarta</li>
      </ul>
    ),
  },
  {
    title: "Hobbies",
    id: "hobbies",
    content: (
      <ul className="list-disc pl-4 text-gray-100">
        <li>Badminton</li>
        <li>Basketball</li>
        <li>Futsal</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, threshold: 0.2 });

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      className="bg-[#1A1A1D] text-white py-16"
      id="about"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      ref={ref}
    >
      <motion.div
        className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Image Section with RGB Backlight */}
        <motion.div
          className="flex justify-center items-center relative"
          variants={childVariants}
        >
          {/* RGB Glow with sea-inspired colors */}
          <div
            className="absolute w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full animate-pulse"
            style={{
              background:
                "linear-gradient(45deg, #007AFF, #00BFFF, #33E8FF, #0096FF)", // Blue sea gradient
              filter: "blur(50px)",
              animation: "rgbPulse 6s ease-in-out infinite",
            }}
          ></div>

          <style jsx>{`
            @keyframes rgbPulse {
              0% {
                transform: scale(1);
              }
              50% {
                transform: scale(1.1);
              }
              100% {
                transform: scale(1);
              }
            }
          `}</style>

          {/* Circular Image */}
          <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] overflow-hidden rounded-full">
            <Image
              src="/ditjal.jpeg"
              layout="fill"
              className="rounded-full object-cover"
              alt="About Me Image"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="mt-4 md:mt-0 text-left flex flex-col h-full"
          variants={childVariants}
        >
          <h2 className="text-4xl font-bold text-gradient bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-500 mb-4">
            About Me
          </h2>
          <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
            I am a beginner software developer and game creator, currently
            learning HTML, Next.js, PHP, CSS, Git, React, JavaScript, Node.js,
            and Unity for game development. I am interested in creating dynamic
            and responsive web applications, and trying to build interactive
            gaming experiences. I learn quickly and am always eager to improve
            my skills. I enjoy working in a team and love collaborating with
            others to create cool applications. In my free time, I also enjoy
            playing sports like badminton, basketball, and futsal.
          </p>

          {/* Tab Buttons */}
          <div className="flex flex-row justify-start mt-8 space-x-4">
            {TAB_DATA.map((tabData) => (
              <TabButton
                key={tabData.id}
                selectTab={() => handleTabChange(tabData.id)}
                active={tab === tabData.id}
              >
                <span
                  className={`bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-500 py-2 px-4 rounded-lg shadow-md hover:from-purple-700 hover:via-pink-600 hover:to-red-600 transition-all duration-300 ${
                    tab === tabData.id ? "opacity-100" : "opacity-70"
                  }`}
                >
                  {tabData.title}
                </span>
              </TabButton>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-8">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              {TAB_DATA.find((t) => t.id === tab).content}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;

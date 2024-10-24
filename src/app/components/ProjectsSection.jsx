"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "TodooList",
    description: "Project",
    image: "/zeze.png",
    tag: ["Web"],
    gitUrl: "/",
    previewUrl: "https://adithyapermana.github.io/toodolist/",
  },
  {
    id: 2,
    title: "Android",
    description: "project",
    image: "/android.jpeg",
    tag: ["Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Game Legoot Level One",
    description: "Project",
    image: "/i.png",
    tag: ["Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "CRUD",
    description: "Project",
    image: "/CRUD.jpeg",
    tag: ["Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Perpus",
    description: "project",
    image: "/perpusnas.jpeg",
    tag: ["Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Pairs",
    description: "Project",
    image: "/pairs.jpeg",
    tag: ["Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Web"); // Default tag is "Web"
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, threshold: 0.2 });

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Project
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        {/* Remove "All" ProjectTag */}
        {/* Add other tags here if necessary */}
      </div>

      <motion.ul
        ref={ref}
        className="grid md:grid-cols-3 gap-8 md:gap-12"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.2 }}
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            transition={{ duration: 0.2, delay: index * 0.1 }} // Faster duration
            whileHover={{ scale: 1.03, boxShadow: "0 5px 15px rgba(255, 255, 255, 0.3)" }} // Slightly smaller scale
            className="transition-transform duration-200" // Faster transition
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default ProjectsSection;

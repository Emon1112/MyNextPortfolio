"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectTags = ["All", "Web", "Mobile"];

const projectsData = [
    {
        id: 1,
        title: "React Portfolio Website",
        description: "Project 1 description",
        image: "/images/Captureport.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Emon1112/MyNextPortfolio",
        previewUrl: "https://ecommerce-1-dy1d.vercel.app/",
    },
    {
        id: 2,
        title: "E-commerce Application",
        description: "Project 2 description",
        image: "/images/Captureecommerce.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Emon1112/Ecommerce-1",
        previewUrl: "https://ecommerce-1-dy1d.vercel.app/",
    },
    {
        id: 3,
        title: "Hospital Info",
        description: "Project 3 description",
        image: "/images/Capturehos.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Emon1112/HospitalInfo",
        previewUrl: "https://hospital-info-three.vercel.app/",
    },
];

const ProjectsSection = () => {
    const [selectedTag, setSelectedTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setSelectedTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(selectedTag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section id="projects" className="py-20 min-h-screen">
            <h2 className="text-center text-4xl font-bold mt-4 mb-8 md:mb-12">
                My Projects
            </h2>
            <div className="flex flex-row justify-center items-center gap-2 py-6">
                {projectTags.map((tag) => (
                    <ProjectTag
                        key={tag}
                        onClick={handleTagChange}
                        name={tag}
                        isSelected={selectedTag === tag}
                    />
                ))}
            </div>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((project, index) => (
                        <motion.li
                            key={project.id}
                            variants={cardVariants}
                            initial="initial"
                            animate={isInView ? "animate" : "initial"}
                            transition={{ duration: 0.3, delay: index * 0.4 }}
                        >
                            <ProjectCard
                                title={project.title}
                                description={project.description}
                                imgUrl={project.image}
                                gitUrl={project.gitUrl}
                                previewUrl={project.previewUrl}
                            />
                        </motion.li>
                    ))
                ) : (
                    <p className="text-center text-3xl">Not yet created</p>
                )}
            </ul>
        </section>
    );
};

export default ProjectsSection;

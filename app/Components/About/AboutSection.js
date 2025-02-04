"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>React.js</li>
                <li>Next.js</li>
                <li>JavaScript (ES6+)
                </li>
                <li>Redux</li>
                <li>Tailwind CSS </li>
                <li>REST & GraphQL API Integration
                </li>
                <li>Framer Motion (for animations)</li>
                <li>Git & GitHub
                </li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <h1 className="font-bold text-2xl">B.Sc. Engineering in CSE</h1>
                <li><b>Institute:</b>Green University Of Bangladesh,Dhaka</li>
                <li><b>Major:</b>Software Engineering</li>
            </ul>
        ),
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>Industrial Training on front-end development at NextTech Ltd. bd.</li>
                <li>Special Training on Front-end Development at Creative IT Institute,Dhaka,Bangladesh </li>
            </ul>
        ),
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className="" id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/images/life of a frontend web developer.png" width={500} height={500} alt="This is About image" />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold  mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">
                        I am a React-based front-end developer with a passion for building interactive, high-performance, and user-friendly web applications.
                        I specialize in JavaScript, React, Next.js,and Tailwind CSS, with a strong focus on optimizing web performance and creating seamless user experiences.
                        I am proficient in integrating APIs (REST/GraphQL) and have experience with Git, version control, and modern front-end tools.
                        As a fast learner, I continuously explore the latest technologies to enhance my skill set.
                        I thrive in collaborative environments and am eager to contribute to innovative projects.                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton
                            selectTab={() => handleTabChange("skills")}
                            active={tab === "skills"}
                        >
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("education")}
                            active={tab === "education"}
                        >
                            {" "}
                            Education{" "}
                        </TabButton>
                        <TabButton
                            selectTab={() => handleTabChange("certifications")}
                            active={tab === "certifications"}
                        >
                            {" "}
                            Certifications{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
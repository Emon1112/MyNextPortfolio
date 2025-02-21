"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const tabData = [
    {
        title: "Skills",
        id: "skills",
        content: [
            "React.js",
            "Next.js",
            "JavaScript (ES6+)",
            "Redux",
            "Tailwind CSS",
            "REST API Integration",
            "Git & GitHub"
        ]
    },
    {
        title: "Education",
        id: "education",
        content: [
            {
                heading: "B.Sc. Engineering in CSE",
                institute: "Green University Of Bangladesh, Dhaka",
                major: "Software Engineering"
            }
        ]
    },
    {
        title: "Certifications",
        id: "certifications",
        content: [
            "Industrial Training on front-end development at NextTech Ltd. bd.",
            "Special Training on Front-end Development at Creative IT Institute, Dhaka, Bangladesh"
        ]
    }
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const handleTabChange = (id) => {
        setTab(id); // Update the active tab
    };

    return (
        <section className="" id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image src="/images/life of a frontend web developer.png" width={500} height={500} alt="This is About image" />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold mb-4">About Me</h2>
                    <p className="text-base lg:text-lg">
                        I am a React-based front-end developer with a passion for building interactive, high-performance, and user-friendly web applications.
                        I specialize in JavaScript, React, Next.js, and Tailwind CSS, with a strong focus on optimizing web performance and creating seamless user experiences.
                        I am proficient in integrating REST API and have experience with Git, version control, and modern front-end tools.
                        As a fast learner, I continuously explore the latest technologies to enhance my skill set.
                        I thrive in collaborative environments and am eager to contribute to innovative projects.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        {tabData.map(tabItem => (
                            <TabButton
                                key={tabItem.id}
                                selectTab={() => handleTabChange(tabItem.id)}
                                active={tab === tabItem.id}
                            >
                                {tabItem.title}
                            </TabButton>
                        ))}
                    </div>

                    <div className="mt-8">
                        {tabData.find((t) => t.id === tab).content.map((item, index) => (
                            <div key={index}>
                                {typeof item === "string" ? <li>{item}</li> : (
                                    <>
                                        <h1 className="font-bold text-2xl">{item.heading}</h1>
                                        <p><b>Institute:</b> {item.institute}</p>
                                        <p><b>Major:</b> {item.major}</p>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;

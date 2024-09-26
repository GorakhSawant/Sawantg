// src/pages/Projects.js
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import project1Image from '../assets/images/profile1.jpg'; // Ensure this image exists

const Projects = () => {
    const projects = [
        {
            title: 'Project 1',
            description: 'Description for project 1.',
            link: 'https://github.com/project1',
            imgSrc: project1Image,
        },
        // Add more projects as needed
    ];

    return (
        <div className="container mx-auto my-20">
            <h2 className="text-3xl font-bold text-center">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;

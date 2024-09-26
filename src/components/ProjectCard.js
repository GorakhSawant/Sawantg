// src/components/ProjectCard.js
import React from 'react';

const ProjectCard = ({ title, description, link, imgSrc }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={imgSrc} alt={title} className="w-full h-40 object-cover" />
            <div className="p-4">
                <h3 className="font-bold text-lg">{title}</h3>
                <p>{description}</p>
                <a href={link} className="text-blue-500 hover:underline">View Project</a>
            </div>
        </div>
    );
};

export default ProjectCard;

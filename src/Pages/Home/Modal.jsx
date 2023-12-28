import { FaGithub } from 'react-icons/fa';
import { useState } from 'react';
import data from "../../data/index.json";

export default function Modal({ project, closeModal }) {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + project.images.length) % project.images.length);
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                {/* Add your modal content here */}
                <p className="close--modal" onClick={closeModal}>X</p>                
                {project.images.length >= 1 && (
                    <div className="modal--section--img">
                    <button className="nav-btn" onClick={handlePrevImage}>&lt;</button>
                    <img src={project.images[currentImageIndex]} alt="Placeholder" />
                    <button className="nav-btn" onClick={handleNextImage}>&gt;</button>
                </div>
                )}
                <div className="portfolio--section--card--content">
                    <h3 className="portfolio--section--title">{project.title}</h3>
                    <p className='text-sm'>{project.date}</p>
                    <p className="text-md">{project.description}</p>
                    <h3 className="portfolio--section--title">Members of the Project</h3>
                    <div className="team-icons">
                        {project.teamMembers.map((member, index) => (
                            <a key={index} href={data.collaborators[member]} target="_blank" rel="noopener noreferrer" title={member}>
                                <div className="team-member-icon">
                                    {member}
                                    <FaGithub />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};


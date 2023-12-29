import { FaGithub } from 'react-icons/fa';
import { useState } from 'react';
import data from "../../data/index.json";
import { MdClose, MdChevronLeft, MdChevronRight } from "react-icons/md";

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
                <MdClose className="close--modal" onClick={closeModal} />
                {project.images.length >= 1 && (
                    <div className="modal--section--img">
                    <MdChevronLeft className="modal--img--navigator" onClick={handlePrevImage}/>
                    <img src={project.images[currentImageIndex]} alt="Placeholder" />
                    <MdChevronRight className="modal--img--navigator" onClick={handleNextImage} />
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


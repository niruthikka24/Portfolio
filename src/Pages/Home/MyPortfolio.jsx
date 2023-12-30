import data from "../../data/index.json";
import { useState } from "react";
import Modal from "./Modal";

export default function MyPortfolio() {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  const openGitHub = (gitHubUrl) => {
    // const gitHubUrl = "https://github.com/niruthikka24"
    window.open(gitHubUrl, '_blank')
  }

  const viewGitHub = () => {
    const gitHubUrl = "https://github.com/niruthikka24"
    window.open(gitHubUrl, '_blank')
  }

  const openModal = (item) => {
    setSelectedProject(item)
    setIsModalOpen(true)
  };

  const closeModal = () => {
    setSelectedProject(null)
    setIsModalOpen(false);
  };

  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <h2 className="portfolio--heading">Projects</h2>
        <div>
          <button className="btn btn-primary" onClick={viewGitHub}>View My GitHub</button>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.projects?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img" onClick={() => openModal(item)}>
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content" onClick={() => openModal(item)}>

              <h3 className="portfolio--section--title">{item.title}</h3>
              <p className="text-md">
                {item.description.split(' ').slice(0, 15).join(' ')}
                {item.description.split(' ').length > 15 && '...'}
              </p>
            </div>
            <div className="portfolio--section--btndiv">
              <button className="btn btn-primary" onClick={() => openGitHub(item.gitHubUrl)}>View Code</button>
            </div>

          </div>
        ))}
      </div>
      {isModalOpen && <Modal project={selectedProject} closeModal={closeModal} />}
    </section>
  );
}

import data from "../../data/index.json";

export default function Skills() {
  return (
    <section className="testimonial--section" id="skills">
      <h2 className="portfolio--heading">Skills</h2>
      <div className="tech--section--container">
        {data?.['skill-items']?.map((item, index) => (
          <div key={index} className="skill--section--card">
            <p className="tech--title">{item.title}</p>
            <div className="skill-tech-container">
              {item.techs?.map((tech, tindex) => (
                <button className="skill-tech" key={tindex}>
                  <p>{tech.name}</p>
                  <img className="skill-icon" src={tech.imagesrc} alt={tech.name} />
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

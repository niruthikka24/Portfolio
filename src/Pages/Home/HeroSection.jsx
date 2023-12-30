import { useState, useEffect } from "react";

export default function HeroSection() {

  const terms = ["Software", "AI | ML",
    "CSE", "Problem",
    "Avid Self"
    /* Add more terms as needed */
  ]

  const endings = ['Developer', 'Enthusiast', 'Undergraduate', 'Solver', 'Learner']

  // const newterms = ['Computer Science', 'Machine Learning', 'Data Science', 'Artificial Intelligence']

  const [termIndex, setTermIndex] = useState(0);

  const openResume = () => {
    const resumeUrl = "https://drive.google.com/file/d/1lKxPdLukJc1nZlfiOI771eB10EM79QTU/view?usp=sharing"
    window.open(resumeUrl, '_blank')
  }

  useEffect(() => {
    // Set up an interval to change the term every 3 seconds (adjust as needed)
    const intervalId = setInterval(() => {
      setTermIndex((prevIndex) => (prevIndex + 1) % terms.length);
    }, 3000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Niruthikka Sritharan</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">{terms[termIndex]}</span>{" "}
            {/* <span className="hero--section-title--color">{newterms[termIndex]}</span>{" "} */}
            <br />
            {/* Enthusiast */}
            {endings[termIndex]}
          </h1>
          <p className="hero--section-description">
            Enthusiast by nature, I am on a quest to explore and apply techniques in the landscapes of Computer Science, Data Science, Machine Learning and Engineering. I constantly try to develop solutions at the intersection of creativity and technology. I eagerly seek opportunities to contribute my skills, learn from others, and collectively grow.
          </p>
        </div>
        <button className="btn btn-primary" onClick={openResume}>View My Resume</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero-section-image.png" alt="Hero Section" />
      </div>
    </section>
  );
}

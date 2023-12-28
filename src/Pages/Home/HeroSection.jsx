import { useState, useEffect } from "react";

export default function HeroSection() {

  const terms = ["Software", "AI | ML",
    "CSE", "Problem",
    "Avid Self"
    /* Add more terms as needed */
  ]

  const endings = ['Developer', 'Enthusiast', 'Undergraduate', 'Solver', 'Learner']

  const [termIndex, setTermIndex] = useState(0);

  const openResume = () => {
    const resumeUrl = "https://drive.google.com/file/d/10u3IlIJMLP8JTLKc27xqeHQIkf4SCHvB/view?usp=sharing"
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
            <br />
            {endings[termIndex]}
          </h1>
          <p className="hero--section-description">
            A reliable, creative and hard-working individual with a great zeal for exploring and applying techniques in Machine Learning, Data Science, Computer Science and Engineering.
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

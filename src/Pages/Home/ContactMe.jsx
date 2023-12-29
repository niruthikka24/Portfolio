import { MdEmail } from "react-icons/md";
import { SiLinkedin, SiGithub } from "react-icons/si";

export default function ContactMe() {

  const openLink = (url) => {
    // const url = "https://github.com/niruthikka24"
    window.open(url, '_blank')
  }

  const sendEmail = () => {
    window.location.href = "mailto:niruthikka.19@cse.mrt.ac.lk"; // Replace with your actual email address
  };

  return (
    <section id="Contact" className="contact--section">
      <h2 className="portfolio--heading">Contact Me</h2>
      <p className="text-lg">
        If you have a project, an idea, or just a shared passion for technology, count me in!
        I am always eager to contribute, learn and grow alongside fellow enthusiasts.
      </p>
      <div className="contact--icons--container">
        <a href="mailto:niruthikka.19@cse.mrt.ac.lk"  onClick={sendEmail}>
          <MdEmail className="contact--icon"/>
        </a>
        <SiLinkedin className="contact--icon" onClick={() => openLink("https://www.linkedin.com/in/niruthikka-sritharan/")} />
        <SiGithub className="contact--icon" onClick={() => openLink("https://github.com/niruthikka24")} />
      </div>
    </section>
  );
}

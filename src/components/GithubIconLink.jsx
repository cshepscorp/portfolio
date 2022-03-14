import { FaGithub, FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';

function AboutIconLink() {
  return (
    <div className="bottom-links">
      <a
        className="bottom-link"
        href="https://github.com/cshepscorp"
        target="_blank"
        rel="noopener"
      >
        <FaGithub size={30} />
      </a>
      <a
        className="bottom-link"
        href="mailto:sheppard.christy@gmail.com"
        target="_blank"
        rel="noopener"
      >
        <FaEnvelope size={30} />
      </a>
      <a className="bottom-link" href="tel:18049281876" rel="noopener">
        <FaPhone size={30} />
      </a>
      <a
        className="bottom-link"
        href="https://www.linkedin.com/in/christinasheppard/"
        target="_blank"
        rel="noopener"
      >
        <FaLinkedin size={30} />
      </a>
    </div>
  );
}

export default AboutIconLink;

import {
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaDownload,
  FaLinkedin,
} from 'react-icons/fa';

function Contact() {
  return (
    <div className="">
      <div className="mx-auto py-24 px-4 grid grid-cols-1 gap-y-8 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-1">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Contact Me
          </h2>
        </div>
        <div className="avatar">
          <div className="w-24 mask mask-hexagon">
            <img src="https://raw.githubusercontent.com/cshepscorp/react-portfolio/main/public/images/hero-headshot-vinyls.png" />
          </div>
        </div>
        <div className="stats shadow contact">
          <div className="stat place-items-center">
            <div className="stat-title dark:text-gray-100">Resume</div>
            <div className="stat-value text-secondary pt-2">
              <a href="https://raw.githubusercontent.com/cshepscorp/portfolio/main/public/christina-Sheppard_resume_March292022.pdf">
                <FaDownload />
              </a>
            </div>
          </div>
          <div className="stat place-items-center">
            <div className="stat-title dark:text-gray-100">Github</div>
            <div className="stat-value text-secondary pt-2">
              <a href="https://github.com/cshepscorp" target="_blank">
                <FaGithub />
              </a>
            </div>
          </div>
          <div className="stat place-items-center">
            <div className="stat-title dark:text-gray-100">LinkedIn</div>
            <div className="stat-value text-secondary pt-2">
              <a
                href="https://www.linkedin.com/in/christinasheppard/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="stat place-items-center">
            <div className="stat-title dark:text-gray-100">Email</div>
            <div className="stat-value text-secondary pt-2">
              <a href="mailto:sheppard.christy@gmail.com">
                <FaEnvelope />
              </a>
            </div>
          </div>
          <div className="stat place-items-center">
            <div className="stat-title dark:text-gray-100">Phone</div>
            <div className="stat-value text-secondary pt-2">
              <a href="tel:18049281876">
                <FaPhone />
              </a>
            </div>
          </div>
        </div>
        <div className="stats stats-vertical shadow mobile-contact">
          <div className="stat place-items-center">
            <div className="stat-title">Resume</div>
            <div className="stat-value text-secondary pt-2">
              <a href="https://raw.githubusercontent.com/cshepscorp/react-portfolio/main/public/Resume-Christy-Sheppard.pdf">
                <FaDownload />
              </a>
            </div>
          </div>
          <div className="stat place-items-center">
            <div className="stat-title">Github</div>
            <div className="stat-value text-secondary pt-2">
              <a href="https://github.com/cshepscorp" target="_blank">
                <FaGithub />
              </a>
            </div>
          </div>
          <div className="stat place-items-center">
            <div className="stat-title">LinkedIn</div>
            <div className="stat-value text-secondary pt-2">
              <a
                href="https://www.linkedin.com/in/christinasheppard/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="stat place-items-center">
            <div className="stat-title">Email</div>
            <div className="stat-value text-secondary pt-2">
              <a href="mailto:sheppard.christy@gmail.com">
                <FaEnvelope />
              </a>
            </div>
          </div>
          <div className="stat place-items-center">
            <div className="stat-title">Phone</div>
            <div className="stat-value text-secondary pt-2">
              <a href="tel:18049281876">
                <FaPhone />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

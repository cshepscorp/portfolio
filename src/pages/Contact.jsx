import {
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaDownload,
  FaLinkedin,
} from 'react-icons/fa';

function Contact() {
  return (
    <div className="bg-white">
      <div className="mx-auto py-24 px-4 grid grid-cols-1 gap-y-8 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-1">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Contact Me
          </h2>
        </div>
        <div class="avatar">
          <div class="w-24 mask mask-hexagon">
            <img src="https://raw.githubusercontent.com/cshepscorp/react-portfolio/main/public/images/hero-headshot-vinyls.png" />
          </div>
        </div>
        <div class="stats shadow contact">
          <div class="stat place-items-center">
            <div class="stat-title">Resume</div>
            <div class="stat-value text-secondary pt-2">
              <a href="https://raw.githubusercontent.com/cshepscorp/react-portfolio/main/public/Resume-Christy-Sheppard.pdf">
                <FaDownload />
              </a>
            </div>
          </div>
          <div class="stat place-items-center">
            <div class="stat-title">Github</div>
            <div class="stat-value text-secondary pt-2">
              <a href="https://github.com/cshepscorp" target="_blank">
                <FaGithub />
              </a>
            </div>
          </div>
          <div class="stat place-items-center">
            <div class="stat-title">LinkedIn</div>
            <div class="stat-value text-secondary pt-2">
              <a
                href="https://www.linkedin.com/in/christinasheppard/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div class="stat place-items-center">
            <div class="stat-title">Email</div>
            <div class="stat-value text-secondary pt-2">
              <a href="mailto:sheppard.christy@gmail.com">
                <FaEnvelope />
              </a>
            </div>
          </div>
          <div class="stat place-items-center">
            <div class="stat-title">Phone</div>
            <div class="stat-value text-secondary pt-2">
              <a href="tel:18049281876">
                <FaPhone />
              </a>
            </div>
          </div>
        </div>
        <div class="stats stats-vertical shadow mobile-contact">
          <div class="stat place-items-center">
            <div class="stat-title">Resume</div>
            <div class="stat-value text-secondary pt-2">
              <a href="https://raw.githubusercontent.com/cshepscorp/react-portfolio/main/public/Resume-Christy-Sheppard.pdf">
                <FaDownload />
              </a>
            </div>
          </div>
          <div class="stat place-items-center">
            <div class="stat-title">Github</div>
            <div class="stat-value text-secondary pt-2">
              <a href="https://github.com/cshepscorp" target="_blank">
                <FaGithub />
              </a>
            </div>
          </div>
          <div class="stat place-items-center">
            <div class="stat-title">LinkedIn</div>
            <div class="stat-value text-secondary pt-2">
              <a
                href="https://www.linkedin.com/in/christinasheppard/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div class="stat place-items-center">
            <div class="stat-title">Email</div>
            <div class="stat-value text-secondary pt-2">
              <a href="mailto:sheppard.christy@gmail.com">
                <FaEnvelope />
              </a>
            </div>
          </div>
          <div class="stat place-items-center">
            <div class="stat-title">Phone</div>
            <div class="stat-value text-secondary pt-2">
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

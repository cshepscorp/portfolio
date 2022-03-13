import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';

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
        <div>
          <ul>
            <li>
              <Link to="mailto:sheppard.christy@gmail.com">
                <EmailIcon /> sheppard dot christy [at] gmail
              </Link>
            </li>
            <li>
              <Link to="tel:18049281876">
                <PhoneIphoneIcon /> 804-928-1876
              </Link>
            </li>
            <li>
              <Link to="https://github.com/cshepscorp">
                <GitHubIcon /> github.com/cshepscorp
              </Link>
            </li>
          </ul>
        </div>
      </div>{' '}
    </div>
  );
}

export default Contact;

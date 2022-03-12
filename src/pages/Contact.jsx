import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <>
      <div className="mt-4">
        <h1 className="text-6xl mb-4">Contact Me</h1>
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
    </>
  );
}

export default Contact;

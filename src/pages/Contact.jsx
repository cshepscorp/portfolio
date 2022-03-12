import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <>
      <div>
        <h1 className="text-6xl mb-4">Contact Me</h1>
      </div>
      <div>
        <Link to="mailto:sheppard.christy@gmail.com">
          <EmailIcon /> sheppard dot christy [at] gmail
        </Link>
        <Link to="tel:18049281876">
          <PhoneIphoneIcon /> 804-928-1876
        </Link>
        <Link to="https://github.com/cshepscorp">
          <GitHubIcon /> github.com/cshepscorp
        </Link>
      </div>
    </>
  );
}

export default Contact;

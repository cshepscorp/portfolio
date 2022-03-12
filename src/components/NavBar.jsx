import { useNavigate, useLocation } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaHome className="inline pr-2 text-3xl" />
          <Link to="/" className="text-lg font-bold align-middle">
            Christy Sheppard
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link
              to="/about"
              className={
                pathMatchRoute('/about')
                  ? 'btn btn-ghost btn-sm rounded-btn navbarListItemNameActive'
                  : 'btn btn-ghost btn-sm rounded-btn navbarListItemName'
              }
            >
              About
            </Link>
            <Link
              to="/portfolio"
              className={
                pathMatchRoute('/portfolio')
                  ? 'btn btn-ghost btn-sm rounded-btn navbarListItemNameActive'
                  : 'btn btn-ghost btn-sm rounded-btn navbarListItemName'
              }
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className={
                pathMatchRoute('/contact')
                  ? 'btn btn-ghost btn-sm rounded-btn navbarListItemNameActive'
                  : 'btn btn-ghost btn-sm rounded-btn navbarListItemName'
              }
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

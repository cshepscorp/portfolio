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
    <div class="navbar bg-base-300">
      <div class="navbar-start">
        <div class="dropdown">
          <label class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a class="btn btn-ghost normal-case text-xl">Christy Sheppard</a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
          <li>
            <Link
              to="/about"
              className={
                pathMatchRoute('/about')
                  ? 'btn btn-ghost navbarListItemNameActive'
                  : 'btn btn-ghost navbarListItemName'
              }
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className={
                pathMatchRoute('/portfolio')
                  ? 'btn btn-ghost navbarListItemNameActive'
                  : 'btn btn-ghost navbarListItemName'
              }
            >
              Portfolio
            </Link>
          </li>
        </ul>
      </div>
      <div class="navbar-end">
        <Link to="/contact" className="btn btn-primary">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

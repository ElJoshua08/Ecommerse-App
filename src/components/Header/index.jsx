import { FaHome, FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex bg-gray-100 shadow-md shadow-gray-200 p-4 absolute top-0 left-0 w-full items-center justify-between h-[70px] dark:bg-gray-800 dark:shadow-gray-700">
      <div className="flex items-center justify-around gap-2">
        <img
          src="/logo/1024.png"
          alt="logo"
          className="w-12 h-12"
        />
        <h1 className="text-1xl font-medium text-gray-900">Ecommerce App</h1>
      </div>
      <nav className="flex flex-grow items-center justify-end mr-1">
        <ul className="flex gap-2 md:gap-4">
          <li>
            <LinkComponent
              to="/"
            >
              <LinkIcon><FaHome /></LinkIcon>
              <LinkTitle>Home</LinkTitle>
            </LinkComponent>
          </li>
          <li>
            <LinkComponent to="/products">
              <LinkIcon><FaShoppingCart /></LinkIcon>
              <LinkTitle>Products</LinkTitle>
            </LinkComponent>
          </li>
          <li>
            <LinkComponent to="/my-account">
              <LinkIcon><FaUser /></LinkIcon>
              <LinkTitle>My Account</LinkTitle>
            </LinkComponent>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const LinkComponent = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="flex items-center justify-center gap-1 transition hover:text-secondary-dark"
    >
      {children}
    </Link>
  );
};

const LinkTitle = ({ children }) => { 
  return (
    <h1 className="text-1xl hidden md:block font-medium text-gray-700
    transition hover:text-secondary-dark">{children}</h1>
  );
}

const LinkIcon = ({ children }) => {
  return (
    <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-md md:rounded-none md:bg-transparent text-gray-700 hover:text-secondary-dark">{children}</div> 
  );
}

export default Header;

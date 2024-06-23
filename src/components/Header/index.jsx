import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex bg-gray-100 p-4 absolute top-0 left-0 w-full items-center justify-between">
      <div className="flex items-center justify-around gap-4">
        <img
          src="/logo/1024.png"
          alt="logo"
          className="w-8 h-8"
        />
        <h1 className="text-1xl font-medium text-gray-900">Ecommerce App</h1>
      </div>
      <nav className="flex flex-grow items-center justify-end gap-4 mr-4">
        <ul className="flex gap-6">
          <li>
            <Link
              className="transition hover:text-secondary-dark"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="transition hover:text-secondary-dark"
              to="/Products"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              className="transition hover:text-secondary-dark"
              to="/MyAccount"
            >
              MyAccount
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
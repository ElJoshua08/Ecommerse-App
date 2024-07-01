import { FaHome, FaShoppingCart, FaUser } from 'react-icons/fa';
import { FaShop } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import usePageStore from '@/stores/actualPageStore.js';

const Header = () => {
  return (
    <header className="flex bg-slate-100 shadow-md shadow-slate-200 py-4 px-2 fixed top-0 left-0 w-full items-center justify-between h-[70px] dark:bg-gray-800 dark:shadow-gray-700 z-[90]">
      <div className="flex items-center gap-2">
        <img
          src="/logo/1024.png"
          alt="logo"
          className="w-16 h-16"
        />
        <h1 className="text-2xl font-medium text-gray-900 dark:text-slate-200">
          <strong className="text-bold text-3xl text-primary">S</strong>hop{' '}
          <strong className="text-bold text-3xl text-primary">N</strong>et
        </h1>
      </div>
      <nav className="flex flex-grow items-center justify-end mr-1">
        <ul className="flex gap-2 md:gap-4">
          <li>
            <LinkComponent to="/">
              <LinkIcon>
                <FaHome />
              </LinkIcon>
              <LinkTitle>Home</LinkTitle>
            </LinkComponent>
          </li>
          <li>
            <LinkComponent to="/products">
              <LinkIcon>
                <FaShop />
              </LinkIcon>
              <LinkTitle>Products</LinkTitle>
            </LinkComponent>
          </li>
          <li>
            <LinkComponent to="/cart">
              <LinkIcon>
                <FaShoppingCart />
              </LinkIcon>
              <LinkTitle>Cart</LinkTitle>
            </LinkComponent>
          </li>
          <li>
            <LinkComponent to="/my-account">
              <LinkIcon>
                <FaUser />
              </LinkIcon>
              <LinkTitle>My Account</LinkTitle>
            </LinkComponent>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const LinkComponent = ({ to, children }) => {
  const { actualPage, setActualPage } = usePageStore();

  const isActive = actualPage === to;

  return (
    <Link
      to={to}
      className={`flex items-center justify-center gap-1 transition-colors rounded-md ${
        isActive
          ? 'bg-slate-200 dark:bg-slate-600 text-slate-900 dark:text-slate-200'
          : 'text-gray-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700'
      }`}
      onClick={() => setActualPage(to)}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </Link>
  );
};

const LinkTitle = ({ children }) => {
  return (
    <h1 className="text-1xl hidden md:block font-medium pr-2">{children}</h1>
  );
};

const LinkIcon = ({ children }) => {
  return (
    <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-md md:rounded-none md:bg-transparent dark:bg-slate-700 dark:md:bg-transparent dark:text-slate-200 text-gray-700">
      {children}
    </div>
  );
};

export default Header;

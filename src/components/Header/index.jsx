import { Link } from 'react-router-dom';
import { usePageStore } from '@/stores/pageStore.js';

const Header = () => {
  const { pages } = usePageStore();


  return (
    <header className="flex bg-slate-100 shadow-md shadow-slate-200 py-4 px-2 top-0 left-0 w-full items-center justify-between h-[70px] dark:bg-gray-800 dark:shadow-gray-700 z-[90] absolute">

      <div className="flex items-center gap-2">
        <img
          src="/logo/1024.png"
          alt="logo"
          className="max-h-12 aspect-square"
        />
        <h1 className="text-2xl font-medium text-slate-700 dark:text-slate-200">
          <strong className="text-bold text-3xl text-primary">S</strong>hop{' '}
          <strong className="text-bold text-3xl text-primary">N</strong>et
        </h1>
      </div>
      <nav className="flex flex-grow items-center justify-end mr-1 gap-2">
          {pages.map((page, index) => (
            <LinkComponent key={index} to={page.path}>
              <LinkIcon>
                <page.icon />
              </LinkIcon>
              <LinkTitle>{page.name}</LinkTitle>
            </LinkComponent>
          ))}
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
    <div className="flex items-center justify-center w-8 h-8 rounded-md md:rounded-none md:bg-transparent  dark:md:bg-transparent dark:text-slate-200 text-gray-700">
      {children}
    </div>
  );
};

export default Header;

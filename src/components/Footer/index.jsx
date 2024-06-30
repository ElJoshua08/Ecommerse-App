import Author from '@/components/Author';
import { FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-200 shadow-2xl shadow-gray-900 rounded-t-xl w-full flex flex-row justify-between items-center absolute bottom-0 px-4 py-2 dark:bg-gray-800 dark:shadow-white">
      {/* Author Social Media */}
      <div className="flex flex-row justify-center items-center gap-3">
        <SocialLink link="https://github.com/ElJoshua08">
          <FaGithub />
        </SocialLink>
        <SocialLink link="https://www.instagram.com/el_.joshua/">
          <FaInstagram />
        </SocialLink>
      </div>

      {/* Author */}
      <Author
        authorName="Joshua"
        authorLink="https://github.com/ElJoshua08"
      />
    </footer>
  );
};

const SocialLink = ({ link, children }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="text-gray-700 dark:text-slate-300 font-bold text-2xl hover:text-secondary-dark transition-colors duration-200"
    >
      {children}
    </a>
  );
};

export default Footer;

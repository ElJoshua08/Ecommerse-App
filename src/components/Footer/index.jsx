import Author from '@/components/Author';
import { FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 rounded-t-xl w-full flex flex-col justify-center items-center absolute bottom-0">
      {/* Author Social Media */}
      <div className="absolute left-2 bottom-2 flex flex-row justify-center items-center gap-3">
        <a
          href="https://github.com/ElJoshua08"
          target="_blank"
          rel="noreferrer"
          className="text-gray-700 font-bold text-2xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/el_.joshua/"
          className="text-gray-700 font-bold text-2xl"
        >
          <FaInstagram />
        </a>
      </div>

      {/* Author */}
      <Author
        authorName="Joshua"
        authorLink="https://github.com/ElJoshua08"
      />
    </footer>
  );
};

export default Footer;

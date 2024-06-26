const Author = ({ authorName, authorLink }) => {
  return (
    <p className="absolute right-3 bottom-1 text-base text-gray-400">
      Made with <span className="text-secondary-dark font-bold">love</span> by{' '}
      <a
        href={authorLink}
        target="_blank"
        rel="noreferrer"
        className="text-secondary-light font-bold"
      >
        {authorName}{' '}
      </a>
    </p>
  );
};

export default Author;

const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search"
      className="bg-slate-200 py-1 px-3 rounded-md shadow-sm shadow-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:shadow-slate-700 border-2 border-transparent outline-none text-lg tracking-wider text-slate-600 font-semibold placeholder:text-slate-400 placeholder:font-normal  duration-200 focus:border-secondary-dark hover:shadow-md transition-all"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export { SearchBar};

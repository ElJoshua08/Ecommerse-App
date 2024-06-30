const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search"
      className="rounded-md bg-slate-200 border-none outline-none text-slate-700 focus:outline-primary-dark w-42  h-full pl-2 dark:bg-slate-800 dark:text-slate-300"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;

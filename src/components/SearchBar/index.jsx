const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search"
      className="rounded-md bg-slate-200 text-slate-700 focus:outline-primary-dark w-42  h-full pl-2"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;

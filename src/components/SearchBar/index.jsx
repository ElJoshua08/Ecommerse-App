const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search"
      className="rounded-md bg-gray-200 text-gray-700 focus:border-primary focus:ring-primary focus:ring-2 w-36"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;

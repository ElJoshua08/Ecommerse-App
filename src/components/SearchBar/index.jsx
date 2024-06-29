const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search"
      className="rounded-md bg-gray-200 text-gray-700 focus:border-primary-dark w-36 py-2 px-4"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;

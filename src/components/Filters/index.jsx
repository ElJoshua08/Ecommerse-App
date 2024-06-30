import SearchBar from '@/components/SearchBar';

const Filters = ({ onSearch, onFilterselect, onRatingFilterSelect, filter, ratingFilter }) => {
  const categories = [
    'all',
    'electronics',
    'jewelery',
    "men's clothing",
    "women's clothing",
  ];

  return (
    <div className="flex flex-row justify-between items-center gap-8 h-12 w-full mb-4 relative top-[-16px]">
      {/* Search */}
      <SearchBar onSearch={onSearch} />

      {/* Categories */}
      <div className="flex flex-row justify-center gap-3">
        {categories.map((category, index) => (
          <CategoryButton
            key={index}
            category={category}
            filter={filter}
            onClick={() => onFilterselect(category)}
          />
        ))}
      </div>
      {/* Rating */}
      <div className="flex flex-row justify-center items-center gap-2">
        <span className="text-gray-500">Min Rating</span>
        <input
          type="number"
          min="0"
          max="5"
          step="0.5"
          value={ratingFilter}
          onChange={(e) => onRatingFilterSelect(Number(e.target.value))}
          className="rounded-md border-gray-300 text-gray-700 focus:border-primary focus:ring-primary focus:ring-2 w-fit"
        />
      </div>
    </div>
  );
};

const CategoryButton = ({ category, filter, onClick }) => (
  <button
    className={`${
      filter === category
        ? 'bg-primary text-gray-700'
        : 'bg-gray-200 text-gray-500 hover:bg-gray-300 hover:text-gray-700'
    } font-medium text-normal rounded-md px-4 py-2 text-sm transition`}
    onClick={onClick}
  >
    {category}
  </button>
);


export default Filters;

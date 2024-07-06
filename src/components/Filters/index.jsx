import { SearchBar } from '@/components/SearchBar';

const Filters = ({
  onSearch,
  onFilterselect,
  onRatingFilterSelect,
  filter,
  ratingFilter,
}) => {
  const categories = [
    'all',
    'electronics',
    'jewelery',
    "men's clothing",
    "women's clothing",
  ];

  return (
    <div className="flex flex-col justify-between items-center gap-8 max-h-screen flex-grow px-2 py-4 border-lime-500 border-2">
      {/* Search */}
      <SearchBar onSearch={onSearch} />

      {/* Categories Wrapper*/}
      <div className="flex flex-col justify-start items-start w-full gap-2">
        {/* Category title */}
        <h3 className="text-lg font-medium text-slate-500 ">Categories</h3>

        {/* Categories */}
        <div className="flex flex-col justify-center gap-2">
          {categories.map((category, index) => (
            <CategoryButton
              key={index}
              category={category}
              filter={filter}
              onClick={() => onFilterselect(category)}
            />
          ))}
        </div>
      </div>
      {/* Rating */}
      <div className="flex flex-row justify-center items-center gap-2">
        <span className="text-slate-500">Min Rating</span>
        <input
          type="number"
          min="0"
          max="5"
          step="0.5"
          value={ratingFilter}
          onChange={(e) => onRatingFilterSelect(Number(e.target.value))}
          className="rounded-md border-gray-300 text-gray-700 focus:border-primary focus:ring-primary 
          focus:ring-2 w-fit pl-2"
        />
      </div>
    </div>
  );
};

const CategoryButton = ({ category, filter, onClick }) => (
  <button
    className={`
      ${
        filter === category
          ? 'bg-primary-dark text-slate-100'
          : 'bg-slate-200 text-slate-500 hover:bg-slate-300 hover:text-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-slate-100'
      } 
    font-medium rounded-sm px-4 h-full text-lg transition `}
    onClick={onClick}
  >
    {category}
  </button>
);

export default Filters;

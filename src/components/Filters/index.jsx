import { SearchBar } from '@/components/SearchBar'
import { FaRegStar, FaStar } from 'react-icons/fa'
import { Range } from 'react-range'

const Filters = ({
  onSearch,
  onFilterSelect,
  onRatingFilterSelect,
  filter,
  ratingFilter,
  priceRange,
  onPriceRangeChange,
}) => {
  const categories = [
    'all',
    'electronics',
    'jewelery',
    "men's clothing",
    "women's clothing",
  ]

  return (
    <div className="flex max-h-screen w-4/12 max-w-56 flex-grow flex-col items-center justify-between gap-6 px-2 py-4">
      {/* Search */}
      <SearchBar onSearch={onSearch} />

      {/* Categories Wrapper*/}
      <CategoryFilter filterName="Categories">
        {/* Categories */}
        <div className="flex flex-col justify-center gap-2 mt-2">
          {categories.map((category, index) => (
            <CategoryButton
              key={index}
              category={category}
              filter={filter}
              onClick={() => onFilterSelect(category)}
            />
          ))}
        </div>
      </CategoryFilter>

      {/* Rating */}
      <CategoryFilter filterName="Min Rating">
        <div className="flex flex-row justify-center gap-2">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i} onClick={() => onRatingFilterSelect(i + 1)}>
              {ratingFilter >= i + 1 ? (
                <FaStar className="cursor-pointer text-lg text-yellow-500" />
              ) : (
                <FaRegStar className="cursor-pointer text-lg text-slate-600 hover:text-slate-500" />
              )}
            </span>
          ))}
        </div>
      </CategoryFilter>

      {/* Price */}
      <CategoryFilter filterName="Price">
      </CategoryFilter>
    </div>
  )
}

const CategoryFilter = ({ filterName, children }) => {
  return (
    <div className="flex w-full flex-col items-start justify-start">
      <h3 className="text-2xl font-semibold text-slate-600 dark:text-slate-300">
        {filterName}
      </h3>
      <div className="flex flex-col justify-center gap-2">{children}</div>
    </div>
  )
}

const CategoryButton = ({ category, filter, onClick }) => (
  <button
    className={`${
      filter === category
        ? 'bg-slate-800 text-secondary-dark'
        : 'text-slate-500 dark:text-slate-300 dark:hover:text-slate-400'
    } h-full rounded-sm px-2 text-left text-lg font-medium transition`}
    onClick={onClick}
  >
    {category}
  </button>
)


export { Filters }

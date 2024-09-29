import { useState } from 'react'
import { SearchBar } from '@/components/SearchBar'
import { FaRegStar, FaStar } from 'react-icons/fa'
import { MultiRangeSlider } from '@/components/MultiRangeSlider'
import { useWindowSize } from '@/hooks/useWindowSize'

const Filters = ({
  handleSearch,
  handleFilterSelect,
  handleRatingSelect,
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

  const { width } = useWindowSize()

  const [openModal, setOpenModal] = useState(false)
  const [isInMobile, setIsInMobile] = useState(width < 480)

  //! PREVIUS CODE
  /*"flex md:max-h-screen md:w-4/12 md:max-w-56 flex-grow mdflex-col items-center justify-between gap-6 px-2 py-4"*/

  return isInMobile ? (
    <h1>Mobile</h1>
  ) : (
    <div className="sticky flex flex-col items-center justify-start gap-4 top-[70px]">
      {/* Search Bar */}
      <SearchBar handleSearch={handleSearch} className="mb-5 mt-5" />
      {/* Categories Wrapper*/}
      <CategoryFilter filterName="Categories">
        {/* Categories */}
        <div className="mt-2 flex flex-col justify-center gap-2">
          {categories.map((category, index) => (
            <CategoryButton
              key={index}
              category={category}
              filter={filter}
              onClick={() => handleFilterSelect(category)}
            />
          ))}
        </div>
      </CategoryFilter>

      {/* Rating */}
      <CategoryFilter filterName="Min Rating">
        <div className="flex flex-row justify-center gap-2">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i} onClick={() => handleRatingSelect(i + 1)}>
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
        <PriceRange
          priceRange={priceRange}
          onPriceRangeChange={onPriceRangeChange}
        />
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
        ? 'bg-slate-300 text-secondary-dark dark:bg-slate-800'
        : 'text-slate-500 dark:text-slate-300 dark:hover:text-slate-400'
    } h-full rounded-sm px-2 text-left text-lg font-medium transition`}
    onClick={onClick}
  >
    {category}
  </button>
)

const PriceRange = ({ priceRange, onPriceRangeChange }) => {
  return (
    <div className="relative mt-2 flex flex-col justify-center gap-4">
      <MultiRangeSlider min={0} max={100} onChange={onPriceRangeChange} />
      {/* Prices */}
      <div className="flex flex-row justify-between gap-2">
        <p>{priceRange.min}€</p>
        <p>{priceRange.max}€</p>
      </div>
    </div>
  )
}

export { Filters }

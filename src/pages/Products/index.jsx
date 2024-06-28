import { useEffect, useState } from 'react';
import Card from '@/components/Card';
import { FaStar } from 'react-icons/fa';

const Products = () => {
  const categories = [
    'all',
    'electronics',
    'jewelery',
    "men's clothing",
    "women's clothing",
  ];
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('all');
  const [ratingFilter, setRatingFilter] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();

      // Simulate a delay to ensure loading animation is visible
      setTimeout(() => {
        setItems(data);
        setLoading(false);
      }, 500); // 500 milliseconds delay
    }

    fetchData();
  }, []);

  const handleFilter = (category) => {
    setFilter(category);
  };

  const handleRatingFilter = (minRating) => {
    setRatingFilter(minRating);
  };

  const filteredItems = items.filter(
    (item) =>
      (filter === 'all' || item.category === filter) &&
      item.rating.rate >= ratingFilter
  );

  return (
    <>
      {/* Filters */}
      <div className="flex flex-row justify-between items-center gap-8 h-12 w-full mb-4">
        {/* Categories */}
        <div className="flex flex-row justify-center gap-3">
          {categories.map((category, index) => (
            <CategoryButton
              key={index}
              category={category}
              filter={filter}
              onClick={() => handleFilter(category)}
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
            onChange={(e) => handleRatingFilter(Number(e.target.value))}
            className="rounded-md border-gray-300 text-gray-700 focus:border-primary focus:ring-primary focus:ring-2 w-fit"
          />
        </div>
      </div>

      {/* Loading Animation */}
      {loading ? (
        <div className="flex justify-center items-center w-full h-64">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : (
        <div className="flex flex-wrap flex-row justify-center gap-4 items-start w-full">
          {/* Products */}
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <Card
                key={item.id}
                item={item}
              />
            ))
          ) : (
            <h1 className="text-center text-2xl font-medium text-gray-500 flex-grow">
              No products found
            </h1>
          )}
        </div>
      )}
    </>
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

export default Products;

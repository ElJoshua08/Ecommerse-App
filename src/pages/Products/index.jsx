import { useEffect, useState } from 'react';
import Card from '@/components/Card';

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
      }, 2000); // 2 seconds delay
    }

    fetchData();
  }, []);

  const handleFilter = (category) => {
    let newFilter = category;
    console.log(newFilter);
    setFilter(newFilter);
  };

  return (
    <>
      {/* Filters */}
      <div className="flex flex-row justify-left items-center gap-4 h-12 w-full rounded-2xl mb-4">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`${
              filter === category
                ? 'bg-primary text-gray-700'
                : 'bg-gray-200 text-gray-500 hover:bg-gray-300 hover:text-gray-700'
            } font-medium text-normal rounded-md px-4 py-2 text-sm transition`}
            onClick={() => handleFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Loading Animation */}
      {loading ? (
        <div className="flex justify-center items-center w-full h-64">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : (
        <div className="flex flex-wrap flex-row justify-center gap-4 items-start w-full">
          {/* Products */}
          {items.map((item) =>
            filter === 'all' ? (
              <Card
                key={item.id}
                item={item}
              />
            ) : item.category === filter ? (
              <Card
                key={item.id}
                item={item}
              />
            ) : null
          )}
        </div>
      )}
    </>
  );
};

export default Products;

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

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();

      setItems(data);
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
      <div className="flex flex-row justify-left items-center gap-4 h-12 w-full rounded-2xl">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`${
              filter === category
                ? 'bg-primary'
                : 'bg-gray-200 hover:bg-gray-300 hover:text-gray-700'
            } text-gray-500 font-medium text-normal rounded-md px-4 py-2 text-sm transition`}
            onClick={() => handleFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products wrapper for display */}
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
    </>
  );
};

export default Products;

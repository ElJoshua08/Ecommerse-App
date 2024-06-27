import { useEffect, useState } from 'react';
import Card from '@/components/Card';

const Products = () => {
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();

      setItems(data);
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://fakestoreapi.com/products/categories');
      const data = await res.json();

      setCategories(data);
    }

    fetchData();
  }, []);

  return (
    <>
      {/* Filters */}
      <div className='flex flex-row justify-left items-center gap-4 h-12 w-full rounded-2xl'>
        {categories.map((category, index) => (
          <button key={index} className='bg-gray-200 text-gray-700 rounded-md px-4 py-2 text-sm'>
            {category}
          </button>
        ))}
      </div>

      {items.map((item) => (
        <Card
          key={item.id}
          item={item}
        />
      ))}
    </>
  );
};

export default Products;
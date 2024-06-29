import { useEffect, useState } from 'react';
import Card from '@/components/Card';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
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
  
  return (
    <>
      {/* Loading Animation */}
      {loading ? (
        <div className="flex justify-center items-center w-full h-64">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : (
        <div className="flex flex-wrap flex-row justify-center gap-4 items-start w-full">
          {/* Products */}
          {items.length > 0 ? (
            items.map((item) => (
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

export default Home;

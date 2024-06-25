import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Card from '@/components/Card';

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log('fetching data');
    async function fetchData() {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();

      setItems(data);
      console.log(data[0]);
    }

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-lvh">
      <main className="flex-grow flex items-center justify-center flex-wrap gap-4 w-full max-w-7xl mx-auto mt-[70px] absolute top-0 left-0 right-0 bottom-0 py-3 px-5">
        {items.map((item) => (
          <Card
            key={item.id}
            item={item}
          />
        ))}
      </main>
    </div>
  );
};

export default Home;
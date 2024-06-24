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
    <div className="flex flex-col items-center justify-center h-screen">
      <Header />

      <main className="flex-grow flex flex-wrap gap-4 w-full max-w-7xl mx-auto mt-[70px]">
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
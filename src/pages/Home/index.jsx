import { useEffect, useState } from 'react';
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
    <main className="flex-grow flex items-center justify-center flex-wrap gap-4 w-full mt-[70px] min-h-screen top-70 relative p-5">
      {items.map((item) => (
        <Card
          key={item.id}
          item={item}
        />
      ))}
    </main>
  );
};

export default Home;

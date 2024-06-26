import { useEffect, useState } from 'react';
import Card from '@/components/Card';

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();

      setItems(data);
    }

    fetchData();
  }, []);

  return (
    <>
      {items.map((item) => (
        <Card
          key={item.id}
          item={item}
        />
      ))}
    </>
  );
};

export default Home;

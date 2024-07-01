import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useItemsStore } from '@/stores/itemsStore';
import { fetchItems } from '@/api/fetchItems';

const Home = () => {
  const { items, setItems } = useItemsStore();

  useEffect(() => {
    const getItems = async () => {
      const data = await fetchItems();
      setItems(data);
    };

    // Only fecth data when the items store is empty
    if (items.length === 0) {
      getItems();
    }
  }, [items, setItems]);

  const heroItems = items
    .filter((item) => item.category === 'electronics')
    .filter((_, i) => i < 3);

  return (
    <>
      <main className="flex flex-row items-center justify-center w-full h-screen">
        <h1>
          WELCOME TO <strong>SHOP NET</strong>, YOUR FAVORITE SHOPPING APP
        </h1>
        <section>
          {heroItems.map((item) => (
            <img src={item.image} alt="image" key={item.id} className='w-32 h-32 rounded-lg' />
          ))}
        </section>

        <Link to="products">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            SHOP NOW
          </button>
        </Link>
      </main>
    </>
  );
};

export default Home;

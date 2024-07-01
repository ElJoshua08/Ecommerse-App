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
      <main className="flex flex-row items-center justify-center min-h-screen">
        <h1 className="flex-grow text-center text-6xl text-slate-200">
          WELCOME TO{' '}
          <strong className="animate-wave bg-[length:200%_100%] text-transparent bg-clip-text bg-gradient-to-r from-primary-dark to-amber-400 text-7xl">
            SHOP NET
          </strong>{' '}
          <br /> YOUR FAVORITE SHOPPING APP
        </h1>
        <section className="flex flex-col items-center justify-center gap-4 w-1/3 flex-shrink-0">
          {heroItems.map((item) => (
            <img
              src={item.image}
              alt="image"
              key={item.id}
              className="w-16 h-16 rounded-lg"
            />
          ))}
        </section>

        <Link to="products">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-3xl py-2 px-3 rounded absolute bottom-8 left-8 transition-colors duration-200">
            SHOP NOW
          </button>
        </Link>
      </main>
    </>
  );
};

export default Home;

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

  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen w-full">
        {/* Main Content */}
        <section className="flex flex-row items-center justify-center min-h-[calc(100vh-70px)] w-full relative">
          <h1 className="flex-grow text-center text-6xl text-slate-200 max-w-xl">
            WELCOME TO{' '}
            <strong className="animate-wave bg-[length:200%_100%] text-transparent bg-clip-text bg-gradient-to-r from-primary-dark to-amber-400 text-7xl">
              SHOP NET
            </strong>{' '}
            <br /> YOUR FAVORITE SHOPPING APP
          </h1>
          <section className="flex flex-col items-center justify-center gap-4 w-2/5 flex-shrink-0">
            {/* Logo Image */}
            <img
              src="/logo/1024.png"
              alt="logo"
              className="w-full rounded-lg aspect-square"
            />
            <h3 className="relative top-[-60px] text-center text-lg text-slate-400 font-thin z-10">
              <strong className="text-slate-200">Fast</strong> -{' '}
              <strong className="text-slate-200">Reliable</strong> -{' '}
              <strong className="text-slate-200">Secure</strong>
            </h3>
          </section>

          <Link to="products">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-3xl py-2 px-3 rounded absolute bottom-8 left-8 transition-colors duration-200 z-[99]">
              SHOP NOW
            </button>
          </Link>
        </section>

        {/* Why choose ShopNet */}
        <section className="flex flex-col items-center justify-center gap-4 w-full min-h-screen flex-shrink-0 bg-slate-800 relative pt-16 mt-4">
          <img src="/waves/homeSection2.png" alt="wave" className="absolute top-[-110px] left-0 w-full z-[1]" />
          <h2 className="text-center text-2xl font-medium text-slate-400 mb-4">
            Why choose ShopNet?
          </h2>
          <div className="flex flex-col items-center justify-center gap-4 w-full">
            <div className="flex flex-col items-center justify-center gap-2 w-full">
              <img
                src="/icons/fast.svg"
                alt="fast"
                className="w-16 h-16"
              />
              <h3 className="text-center text-lg text-slate-400 font-thin">
                <strong className="text-slate-200">Fast</strong>
              </h3>
              <p className="text-center text-sm text-slate-400">
                ShopNet is fast and responsive, providing a seamless shopping
                experience.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 w-full">
              <img
                src="/icons/reliable.svg"
                alt="reliable"
                className="w-16 h-16"
              />
              <h3 className="text-center text-lg text-slate-400 font-thin">
                <strong className="text-slate-200">Reliable</strong>
              </h3>
              <p className="text-center text-sm text-slate-400">
                ShopNet is reliable and secure, providing a trustworthy shopping
                experience.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 w-full">
              <img
                src="/icons/secure.svg"
                alt="secure"
                className="w-16 h-16"
              />
              <h3 className="text-center text-lg text-slate-400 font-thin">
                <strong className="text-slate-200">Secure</strong>
              </h3>
              <p className="text-center text-sm text-slate-400">
                ShopNet is secure and encrypted, providing a safe and secure
                shopping experience.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;

import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useItemsStore } from '@/stores/itemsStore';
import { fetchItems } from '@/api/fetchItems';
import { useUserStore } from '../../stores/userStore';
import Main from './_components/Main';
import WhyUseShopNet from './_components/WhyUseShopNet';

const Home = () => {
  const { items, setItems } = useItemsStore();
  const { user } = useUserStore();

  let theme = user?.preferences?.theme;

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
        <Main />

        {/* Why choose ShopNet */}
        <WhyUseShopNet theme={theme} />
        
      </main>
    </>
  );
};

export default Home;

import { useEffect } from 'react';
import { useItemsStore } from '@/stores/itemsStore';
import { useUserStore } from '../../stores/userStore';
import { fetchItems } from '@/api/fetchItems';
import { Main } from './_components/Main';
import { WhyChooseUs } from './_components/WhyChooseUs';

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
        <WhyChooseUs theme={theme} />
      </main>
    </>
  );
};

export { Home };

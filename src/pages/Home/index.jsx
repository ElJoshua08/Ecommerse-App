import { useEffect } from 'react';
import { useItemsStore } from '@/stores/itemsStore';
import { fetchItems } from '@/api/fetchItems';
import { WhyChooseUs } from './_components/WhyChooseUs';
import { Main } from './_components/Main';
import { Testimonials } from './_components/Testimonials';
import { ContactUs } from './_components/ContactUs';

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
        <Main />

        {/* Why choose Us */}
        <WhyChooseUs />

        {/* Testimonials */}
        <Testimonials />

        {/* Contact Us */}
        <ContactUs />
      </main>
    </>
  );
};

export { Home };

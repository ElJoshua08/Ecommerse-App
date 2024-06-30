import { useEffect, useState } from 'react';
import Card from '@/components/Card';
import Filters from '@/components/Filters';
import CardSkeleton from '../../components/CardSkeleton';

const Products = () => {
  const [search, setSearch] = useState('');
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('all');
  const [ratingFilter, setRatingFilter] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();

      // Simulate a delay to ensure loading animation is visible
      setTimeout(() => {
        setItems(data);
        setLoading(false);
      }, 500); // 500 milliseconds delay
    }

    fetchData();
  }, []);

  const onFilterSelect = (category) => {
    setFilter(category);
  };

  const onRatingFilterSelect = (minRating) => {
    setRatingFilter(minRating);
  };

  const onSearch = (value) => {
    setSearch(value);
  };

  const filteredItems = items.filter(
    (item) =>
      (filter === 'all' || item.category === filter) &&
      item.rating.rate >= ratingFilter &&
      (search === '' || item.title.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <>
      <Filters
        onSearch={onSearch}
        onFilterselect={onFilterSelect}
        onRatingFilterSelect={onRatingFilterSelect}
        filter={filter}
        ratingFilter={ratingFilter}
      />

      {/* Loading Animation */}
      {loading ? (
        <div className="flex flex-wrap flex-row justify-center gap-4 items-start w-full relative top-[-18px]">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      ) : (
        <div className="flex flex-wrap flex-row justify-center gap-4 items-start w-full relative top-[-18px]">
          {/* Products */}
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <Card
                key={item.id}
                item={item}
              />
            ))
          ) : (
            <h1 className="text-center text-2xl font-medium text-gray-500 flex-grow">
              No products found
            </h1>
          )}
        </div>
      )}
    </>
  );
};

export default Products;

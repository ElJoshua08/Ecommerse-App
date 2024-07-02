import { useEffect, useState } from 'react';
import Card from '@/components/Card';
import Filters from '@/components/Filters';
import CardSkeleton from '@/components/CardSkeleton';
import { useItemsStore } from '@/stores/itemsStore';
import { fetchItems } from '@/api/fetchItems';

const Products = () => {
  const { items, setItems } = useItemsStore();

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [ratingFilter, setRatingFilter] = useState(0);
  const [loading, setLoading] = useState(items.length === 0);

  const cardSkeletons = Array(4/* Total Cards */).fill(0).map((_, index) => (
    <CardSkeleton key={index} />
  ));

  useEffect(() => {
    const getItems = async () => {
      setLoading(true);
      const data = await fetchItems();
      setItems(data);
      setLoading(false);
    };

    // Only fecth data when the items store is empty
    if (items.length === 0) {
      getItems();
    }
  }, [items, setItems]);

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

      <div className="flex flex-wrap flex-row justify-center gap-4 items-start w-full relative top-[-18px] px-4 py-2">
        {loading ? (
          <>
            {cardSkeletons}
          </>
        ) : filteredItems.length > 0 ? (
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
    </>
  );
};

export { Products };

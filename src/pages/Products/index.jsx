import { useEffect, useState } from 'react'
import Card from '@/components/Card'
import { Filters } from '@/components/Filters'
import CardSkeleton from '@/components/CardSkeleton'
import { useItemsStore } from '@/stores/itemsStore'
import { fetchItems } from '@/api/fetchItems'

const Products = () => {
  const { items, setItems } = useItemsStore()

  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')
  const [ratingFilter, setRatingFilter] = useState(0)
  const [priceRange, setPriceRange] = useState([0, 100])
  const [loading, setLoading] = useState(items.length === 0)

  const cardSkeletons = Array(4 /* Total Cards */)
    .fill(0)
    .map((_, index) => <CardSkeleton key={index} />)

  useEffect(() => {
    const getItems = async () => {
      setLoading(true)
      const data = await fetchItems()
      setItems(data)
      setLoading(false)
    }

    // Only fecth data when the items store is empty
    if (items.length === 0) {
      getItems()
    }
  }, [items, setItems])

  const onFilterSelect = (category) => {
    setFilter(category)
  }

  const onRatingFilterSelect = (minRating) => {
    setRatingFilter(minRating)
  }

  const onSearch = (value) => {
    setSearch(value)
  }

  const handlePriceRangeChange = (range) => setPriceRange(range)

  const filteredItems = items.filter(
    (item) =>
      (filter === 'all' || item.category === filter) &&
      item.rating.rate >= ratingFilter &&
      (search === '' || item.title.toLowerCase().includes(search.toLowerCase()))
  )

  return (
    <div className="flex h-full w-full flex-row items-start justify-between">
      <Filters
        onSearch={onSearch}
        onFilterselect={onFilterSelect}
        onRatingFilterSelect={onRatingFilterSelect}
        filter={filter}
        ratingFilter={ratingFilter}
        priceRange={priceRange}
        onPriceRangeChange={handlePriceRangeChange}
      />

      <div className="relative right-0 flex w-[calc(100%-96px)] flex-grow flex-row flex-wrap items-start justify-center gap-4 p-4">
        {loading ? (
          <>{cardSkeletons}</>
        ) : filteredItems.length > 0 ? (
          filteredItems.map((item) => <Card key={item.id} item={item} />)
        ) : (
          <h1 className="flex h-full flex-grow items-center justify-center text-center text-4xl font-medium text-gray-500">
            No products found
          </h1>
        )}
      </div>
    </div>
  )
}

export { Products }

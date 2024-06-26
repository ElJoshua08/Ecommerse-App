import { FaRegStar, FaStar } from 'react-icons/fa';

const Card = ({ item }) => {
  let rating = Math.floor(item.rating.rate);
  let stars = Array(5)
    .fill(0)
    .map((_, i) =>
      i < rating ? (
        <FaStar
          key={i}
          className="text-yellow-500"
        />
      ) : (
        <FaRegStar
          key={i}
          className="text-gray-400"
        />
      )
    );

  return (
    // Card
    <div className="flex flex-row items-center justify-between bg-gray-200 w-5/12 min-w-96 h-48 rounded-lg flex-shrink-0 flex-grow shadow-md hover:shadow-2xl transition-shadow duration-300 ease-in-out cursor-pointer">
      {/* Card Image and Category */}
      <div className="overflow-hidden flex-shrink-0  h-full w-2/5 flex flex-col justify-center items-start relative">
        <img
          className="flex-grow aspect-video h-full object-cover object-center rounded-lg"
          src={item.image}
          alt="Product Image"
        />
        <p className="absolute bottom-1 right-1 z-[10] text-sm letter text-white bg-slate-700/30 backdrop-blur-md rounded-full px-2 py-1">
          {item.category}
        </p>
      </div>

      {/* Card Content */}
      <div className="flex flex-grow flex-col justify-start items-start text-center overflow-hidden h-full p-2 relative">
        {/* Card Title */}
        <h1 className="text-md font-semibold text-wrap text-ellipsis overflow-hidden text-left leading-tight h-fit max-h-[2lh]">
          {item.title}
        </h1>
        {/* Card Rate and Count */}
        <div className="flex flex-row justify-center gap-1 items-center">
          {stars}
          <p className="text-sm text-gray-500 flex items-center h-full">
            {item.rating.count} reviews
          </p>
        </div>

        {/* Description */}
        <p className="text-xs text-gray-500 text-ellipsis overflow-hidden text-left leading-tight mt-1 h-fit max-h-[4lh]">
          {item.description}
        </p>

        {/* Price*/}
        <p className="text-sm text-gray-500 absolute bottom-2 left-2">
          {item.price} €
        </p>

        {/* Add to cart button */}
        <button className="bg-primary-dark text-white rounded-lg px-4 py-2 text-sm right-[0.6rem] bottom-2 absolute font-semibold transition hover:bg-primary">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;

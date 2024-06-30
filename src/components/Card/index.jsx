import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Card = ({ item }) => {
  const fullStars = Math.floor(item.rating.rate);
  const halfStar = item.rating.rate % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  const stars = [
    ...Array(fullStars).fill(<FaStar className="text-yellow-500" />),
    ...(halfStar
      ? [
          <FaStarHalfAlt
            className="text-yellow-500"
            key={1}
          />,
        ]
      : []),
    ...Array(emptyStars).fill(<FaRegStar className="text-slate-400" />),
  ];

  return (
    <div className="flex flex-row items-center justify-between bg-slate-200 w-96 max-w-[400px] min-w-52 h-48 rounded-lg flex-shrink-0 flex-grow shadow-md hover:shadow-2xl transition-shadow duration-300 ease-in-out cursor-pointer">
      {/* Card Image and Category */}
      <div className="overflow-hidden flex-shrink-0 h-full w-2/5 flex flex-col justify-center items-start relative">
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
          {stars.map((star, index) => (
            <span key={index}>{star}</span>
          ))}
          <p className="text-sm text-gray-500 flex items-center h-full">
            {item.rating.count} reviews
          </p>
        </div>

        {/* Description */}
        <p className="text-xs text-gray-500 text-ellipsis overflow-hidden text-left leading-tight mt-1 h-fit max-h-[4lh]">
          {item.description}
        </p>

        {/* Price */}
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

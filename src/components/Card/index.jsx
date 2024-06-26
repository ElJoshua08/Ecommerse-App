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
    <div className="flex flex-row items-center justify-between bg-slate-200 w-96 max-w-[400px] min-w-52 h-48 rounded-lg flex-shrink-0 flex-grow shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer dark:bg-slate-800 dark:shadow-slate-600/50 dark:hover:shadow-slate-600/50">
      {/* Card Image and Category */}
      <div className="overflow-hidden flex-shrink-0 h-full w-2/5 flex flex-col justify-center items-start relative">
        <img
          className="flex-grow aspect-video h-full object-cover object-center rounded-lg"
          src={item.image}
          alt="Product Image"
        />
        <p className="absolute bottom-1 right-1 z-[10] text-sm tracking-wide text-white bg-slate-800/70 backdrop-blur-lg rounded-lg px-2 py-1">
          {item.category}
        </p>
      </div>

      {/* Card Content */}
      <div className="flex flex-grow flex-col justify-start items-start text-center overflow-hidden h-full p-2 relative">
        {/* Card Title */}
        <h1 className="text-md font-semibold text-wrap text-ellipsis overflow-hidden text-left leading-tight h-fit max-h-[2lh] dark:text-slate-100">
          {item.title}
        </h1>
        {/* Card Rate and Count */}
        <div className="flex flex-row justify-center gap-1 items-center">
          {stars.map((star, index) => (
            <span key={index}>{star}</span>
          ))}
          <p className="text-sm text-slate-700 flex items-center h-full dark:text-slate-400">
            {item.rating.count} reviews
          </p>
        </div>

        {/* Description */}
        <p className="text-xs text-slate-6100 text-ellipsis overflow-hidden text-left leading-tight mt-1 h-fit max-h-[4lh] dark:text-slate-300">
          {item.description}
        </p>

        {/* Price */}
        <p className="text-md text-gray-500 absolute bottom-1 left-2 font-bold dark:text-slate-300">
          {item.price} €
        </p>

        {/* Add to cart button */}
        <button className="bg-secondary text-slate-100 rounded-md px-2 py-1 text-md tracking-wide right-[0.6rem] bottom-2 absolute font-semibold transition-colors duration-200 hover:bg-secondary-dark">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Card;

import { FaRegStar, FaStar } from "react-icons/fa";
import { MdStarOutline } from "react-icons/md";

const Card = ({ item }) => {
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
        <p className="absolute bottom-1 right-1 z-[10] text-xs text-white bg-slate-700/30 backdrop-blur-md rounded-full px-2 py-1">
          {item.category}
        </p>
      </div>

      {/* Card Content */}
      <div className="flex flex-grow flex-col justify-around items-center gap-2 text-center h-12 overflow-hidden">
        {/* Card Title */}
        <h1 className="text-sm font-bold max-w-[40ch] text-wrap text-ellipsis overflow-hidden text-left ml-2">
          {item.title}
        </h1>
        {/* Card Rate and Count */}
        <div className="flex flex-row justify-center gap-1 items-center">
          <FaRegStar />
          <FaStar /> 
        </div>
      </div>
    </div>
  );
};

export default Card;
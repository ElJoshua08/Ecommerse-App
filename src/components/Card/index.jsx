const Card = ({ item }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-200 w-56 h-72 p-4 rounded-2xl flex-shrink-0">
      <img className="flex-grow aspect-square object-cover rounded-2xl" src={item.image} alt="Product Image" />
      <div className="flex flex-col justify-center items-center gap-2 text-center h-12">
        <h1 className="text-sm text-ellipsis overflow-hidden ">{item.title}</h1>
      </div>
    </div>
  );
};

export default Card;
const Card = ({ item }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-200 max-w-56 aspect-square p-4 rounded-2xl">
      <img className="flex-grow aspect-square object-cover p-2 rounded-2xl" src={item.image} alt="Product Image" /> 
      <h1 className="text-sm">{item.title}</h1>
    </div>
  );
};

export default Card;
export const fetchItems = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();

  console.log("Fetching from api");
  return data;
};

import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Stars = ({ rating, className }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  const stars = [
    ...Array(fullStars).fill(<FaStar className={`text-yellow-500 ${className}`} />),
    ...(halfStar
      ? [
          <FaStarHalfAlt
            className={`text-yellow-500 ${className}`}
            key={1}
          />,
        ]
      : []),
    ...Array(emptyStars).fill(<FaRegStar className={`text-slate-400 ${className}`} />),
  ];

  return (
    <>
      {stars.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </>
  );
};

export { Stars };

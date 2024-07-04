import { useThemePreference } from '@/hooks/useThemePreference';
import { Stars } from '@/components/Stars';
import { useState } from 'react';

const Testimonials = () => {
  const theme = useThemePreference();
  const testimonials = [
    {
      name: 'Alice Johnson',
      rate: 5,
      date: '2024-06-12',
      avatar: '/avatars/avatar1.jpg',
      content:
        'Absolutely loved the product! It exceeded my expectations in every way. The quality is top-notch and the customer service was fantastic.',
    },
    {
      name: 'Michael Smith',
      rate: 4.5,
      date: '2024-05-30',
      avatar: '/avatars/avatar2.jpg',
      content:
        "Great product overall. It works as described and the shipping was fast. I just wish it had a few more features, but I'm very satisfied.",
    },
    {
      name: 'Jessica Brown',
      rate: 5,
      date: '2024-05-15',
      avatar: '/avatars/avatar3.jpg',
      content:
        'I am extremely happy with my purchase. The product is high-quality and the user experience has been wonderful. Highly recommend!',
    },
    {
      name: 'David Wilson',
      rate: 4,
      date: '2024-04-28',
      avatar: '/avatars/avatar4.jpg',
      content:
        'The product is good, but it didn’t meet all my expectations. Customer service was helpful, though, and I might consider buying again.',
    },
    {
      name: 'Emma Davis',
      rate: 4.5,
      date: '2024-04-10',
      avatar: '/avatars/avatar5.jpg',
      content:
        'Very good product, well-made and reliable. The support team was very responsive to my queries. Would definitely recommend to others.',
    },
  ];

  const [startX, setStartX] = useState(0); // Track initial mouse position
  const [translateX, setTranslateX] = useState(0); // Track translateX position


  const handleMouseDown = (e) => {
    setStartX(e.clientX); // Record initial mouse position on mouse down
  };

  const handleMouseUp = (e) => {
    const mouseMovement = e.clientX - startX; // Calculate mouse movement
    let newTranslateX = translateX + mouseMovement; // Update translateX state with mouse movement
    if (newTranslateX < -675) newTranslateX = 675; // Limit translateX to -675
    if (newTranslateX > 675) newTranslateX = -675; // Limit translateX to 675
    setTranslateX(newTranslateX); // Update translateX state with mouse movement
    setStartX(0); // Reset startX state after mouse up
  };

  return (
    <section className="flex flex-col items-center justify-start gap-2 w-full h-fit py-6 flex-shrink-0 bg-slate-100 relative dark:bg-slate-700 px-6">
      {/* Section decoration */}
      <img
        src={`/waves/${
          theme === 'dark' ? 'dark' : 'light'
        }/testimonialsTop.png`}
        alt="wave"
        className="absolute top-0 translate-y-[-97%] left-0 w-full"
      />

      {/* Title */}
      <h1 className="text-7xl text-center font-normal text-slate-600 dark:text-slate-300 leading-[0.8]">
        See what our{' '}
        <span className=" text-center text-secondary-dark font-semibold">
          customers
        </span>{' '}
        say about us
      </h1>
      {/* Happy customers */}
      <div className="flex flex-row items-center justify-center gap-2 w-full">
        <h3 className="text-lg font-semibold text-slate-500 dark:text-slate-200">
          <span className="text-primary">+1300</span> Happy Customers
        </h3>
      </div>
      {/* Testimonials */}
      <div className="overflow-hidden flex flex-wrap justify-center *:select-none cursor-pointer mt-10">
        <ul
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          className={`flex gap-5 transition-transform duration-500`}
          style={{ transform: `translateX(${translateX * 1.5}px)` }}
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
            />
          ))}
        </ul>
      </div>

      {/* Section decoration */}
      <img
        src={`/waves/${
          theme === 'dark' ? 'dark' : 'light'
        }/testimonialsBottom.png`}
        alt="wave"
        className="absolute bottom-0 left-0 w-full translate-y-full z-[1]"
      />
    </section>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <li className="flex flex-col flex-shrink-0 items-center justify-start gap-4 w-72 h-56 bg-slate-100 dark:bg-slate-800 p-2 rounded-lg border-2 border-slate-400 dark:border-slate-600 shadow-xl shadow-slate-300 dark:shadow-slate-600/50">
      {/* Name, avatar, and date */}
      <div className="flex flex-row items-center justify-between gap-2 w-full">
        <img
          src={testimonial.avatar}
          alt="avatar"
          className="w-12 rounded-full object-cover aspect-square border-slate-400 dark:border-slate-600 shadow-xl shadow-slate-300 dark:shadow-slate-600/50"
        />
        <div className="flex flex-row items-center justify-start gap-2 w-full">
          <h1>{testimonial.name}</h1>
        </div>
        <p className="text-center text-xs text-slate-500 dark:text-slate-400 self-start font-light min-w-fit">
          {testimonial.date}
        </p>
      </div>

      <div className="flex flex-col items-start justify-start gap-2 w-full">
        {/* Content */}
        <p className="text-center text-ld leading-6 text-slate-400 dark:text-slate-300">
          {testimonial.content}
        </p>

        {/* Rating */}
        <div className="flex flex-row items-center justify-center gap-2 w-full">
          <Stars
            rating={testimonial.rate}
            className="text-xl mt-1"
          />
        </div>
      </div>
    </li>
  );
};

export { Testimonials };

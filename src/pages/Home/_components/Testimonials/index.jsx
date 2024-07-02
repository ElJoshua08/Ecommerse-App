import { Stars } from "@/components/Stars";

const Testimonials = () => {
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

  return (
    <section className="flex flex-row items-center justify-start gap-4 w-full h-fit py-12 flex-shrink-0 bg-slate-100 relative  mt-4 dark:bg-slate-700 px-6">
      {testimonials.map((testimonial, index) => {
        return (
          <TestimonialCard
            key={index}
            testimonial={testimonial}
          />
        );
      })}
    </section>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="flex flex-col flex-shrink-0 items-center justify-start gap-4 w-72 h-56 bg-slate-100 dark:bg-slate-800 p-2 rounded-lg border-2 border-slate-400 dark:border-slate-600 shadow-xl shadow-slate-300 dark:shadow-slate-600/50">
      {/* Name, avatar, and date */}
      <div className="flex flex-row items-center justify-between gap-2 w-full">
        <img
          src={testimonial.avatar}
          alt="avatar"
          className="w-12 rounded-full object-cover
        aspect-square border-slate-400 dark:border-slate-600 shadow-xl shadow-slate-300 dark:shadow-slate-600/50"
        />
        <div className="flex flex-row items-center justify-start gap-2 w-full">
          {/* TODO Here should the avatar be */}
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
          <Stars rating={testimonial.rate} className="text-xl mt-1" />
        </div>
      </div>
    </div>
  );
};
export { Testimonials };

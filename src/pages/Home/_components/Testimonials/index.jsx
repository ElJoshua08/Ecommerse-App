import { useThemePreference } from '@/hooks/useThemePreference'
import { useState, useEffect, useRef } from 'react'
import { Stars } from '@/components/Stars'

const Testimonials = () => {
  const theme = useThemePreference()
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
  ]

  return (
    <section className="relative flex h-fit w-full flex-shrink-0 flex-col items-center justify-start gap-2 bg-slate-100 px-6 py-10 dark:bg-slate-700">
      {/* Section decoration */}
      <img
        src={`/waves/${theme === 'dark' ? 'dark' : 'light'}/testimonialsTop.png`}
        alt="wave"
        className="absolute left-0 top-0 w-full translate-y-[-97%]"
      />

      {/* Title */}
      <h1 className="text-center text-7xl font-normal leading-[0.8] text-slate-600 dark:text-slate-300">
        See what our{' '}
        <span className="text-center font-semibold text-secondary-dark">
          customers
        </span>{' '}
        say about us
      </h1>
      {/* Happy customers */}
      <div className="flex w-full flex-row items-center justify-center gap-2">
        <h3 className="text-lg font-semibold text-slate-500 dark:text-slate-200">
          <span className="text-primary">+1300</span> Happy Customers
        </h3>
      </div>
      {/* Testimonials */}
      <InfiniteScrollTestimonials testimonials={testimonials} />
    </section>
  )
}

const InfiniteScrollTestimonials = ({ testimonials }) => {
  const ulRef = useRef(null)

  useEffect(() => {
    const ul = ulRef.current
    const duplicateUl = ul.cloneNode(true)
    duplicateUl.setAttribute('aria-hidden', 'true')
    ul.insertAdjacentElement('afterend', duplicateUl)
  }, [])

  return (
    <div className="mt-10 flex cursor-pointer select-none  justify-center overflow-x-clip overflow-y-visible">
      <ul ref={ulRef} className="animate-infinite-scroll flex flex-row gap-5 bg-transparent">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} testimonial={testimonial} />
        ))}
      </ul>
    </div>
  )
}

const TestimonialCard = ({ testimonial }) => {
  return (
    <li className="flex h-60 w-80 flex-shrink-0 flex-col items-center justify-start gap-4 rounded-lg border-2 border-slate-400 bg-slate-200 p-2 shadow-xl shadow-slate-300 dark:border-slate-600 dark:bg-slate-800 dark:shadow-slate-600/50">
      {/* Name, avatar, and date */}
      <div className="flex w-full flex-row items-center justify-between gap-2">
        <img
          src={testimonial.avatar}
          alt="avatar"
          className="aspect-square w-12 rounded-full border-slate-400 object-cover shadow-xl shadow-slate-300 dark:border-slate-600 dark:shadow-slate-600/50"
        />
        <div className="flex w-full flex-row items-center justify-start gap-2">
          <h1>{testimonial.name}</h1>
        </div>
        <p className="min-w-fit self-start text-center text-xs font-light text-slate-500 dark:text-slate-400">
          {testimonial.date}
        </p>
      </div>

      <div className="flex w-full flex-col items-start justify-start gap-2">
        {/* Content */}
        <p className="text-center text-lg leading-6 text-slate-400 dark:text-slate-300">
          {testimonial.content}
        </p>

        {/* Rating */}
        <div className="flex w-full flex-row items-center justify-center gap-2">
          <Stars rating={testimonial.rate} className="mt-1 text-xl" />
        </div>
      </div>
    </li>
  )
}

export { Testimonials }

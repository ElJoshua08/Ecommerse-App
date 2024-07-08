import { useEffect, useState } from 'react'
import { FaArrowCircleRight } from 'react-icons/fa'

const ContactUs = () => {
  return (
    <section className="relative z-0 flex w-full flex-shrink-0 flex-col items-center justify-start gap-4 bg-slate-200 px-4 py-24 *:z-10 dark:bg-slate-600">
      {/* Title */}
      <div className="flex flex-col items-center justify-center">
        <p className="text-sm text-slate-100/80">Do you have any doubts?</p>
        <h1 className="bg-gradient-to-r from-secondary-dark to-primary-dark bg-clip-text text-center text-8xl font-bold leading-[0.8] text-transparent">
          Contact us!
        </h1>
      </div>

      <ContactCard />
    </section>
  )
}

const ContactCard = () => {
  const [characters, setCharacters] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const MaxCharacters = 200

  const handleChange = (e) => {
    const { value } = e.target
    if (value.length > MaxCharacters) {
      e.target.value = value.slice(0, MaxCharacters)
      return
    }

    setCharacters(value.length)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
    }, 3000)
  }

  return (
    <form
      onSubmit={handleSubmit}
      method="get"
      className="relative grid max-w-2xl grid-cols-2 gap-4 rounded-md bg-slate-400 p-4 shadow-lg shadow-slate-500"
    >
      {/* Name */}
      <div className="col-span-1">
        <label htmlFor="name" className="text-lg font-medium text-slate-700">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="w-full rounded-md border-2 border-slate-400 p-1 text-lg text-slate-200 placeholder-slate-400 outline-none ring-transparent transition-colors duration-200 dark:border-transparent dark:bg-slate-700 dark:shadow-slate-600/50 dark:hover:border-slate-300 dark:focus:border-slate-300"
          placeholder="We should call you..."
          required
        />
      </div>
      {/* Email */}
      <div className="col-span-1">
        <label htmlFor="email" className="text-lg font-medium text-slate-700">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="w-full rounded-md border-2 border-slate-400 p-1 text-lg text-slate-200 placeholder-slate-400 outline-none ring-transparent transition-colors duration-200 dark:border-transparent dark:bg-slate-700 dark:shadow-slate-600/50 dark:hover:border-slate-300 dark:focus:border-slate-300"
          placeholder="Tell us your email..."
          required
        />
      </div>
      {/* Your Question */}
      <div className="col-span-2">
        <label htmlFor="content" className="text-lg font-medium text-slate-700">
          Your Question
        </label>
        <textarea
          onChange={handleChange}
          type="text"
          name="content"
          id="content"
          className="flex min-h-[7lh] w-full resize-none items-start justify-start rounded-md border-2 border-slate-400 p-1 text-start align-top text-lg text-slate-200 placeholder-slate-400 outline-none ring-transparent transition-colors duration-200 dark:border-transparent dark:bg-slate-700 dark:shadow-slate-600/50 dark:hover:border-slate-300 dark:focus:border-slate-300"
          required
        />
        {/* Max characters */}
        <p className="text-slate-600">
          {characters} / {MaxCharacters}
        </p>
      </div>
      <button
        className={`absolute -bottom-4 right-0 translate-y-full items-center justify-end gap-2 overflow-hidden rounded-full border-2 border-transparent bg-accent-dark py-1 pl-2 pr-1 transition-all duration-200 hover:border-accent ${isSubmitting ? 'block cursor-not-allowed gap-0 pl-1' : 'flex'}`}
        disabled={isSubmitting}
      >
        <div
          className={`relative overflow-hidden transition-all duration-200 ${isSubmitting ? 'w-0 h-0 translate-x-full' : 'max-w-full'}`}
        >
          <p
            className={`origin-right text-2xl transition-transform duration-200 ${isSubmitting ? 'scale-x-0' : 'scale-x-100'}`}
          >
            Send
          </p>
        </div>
        <FaArrowCircleRight
          className={`text-3xl transition-all duration-200 ${isSubmitting ? 'animate-spin text-4xl' : ''}`}
        />
      </button>
    </form>
  )
}

export { ContactUs }

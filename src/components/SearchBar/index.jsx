const SearchBar = ({ onSearch, className }) => {
  return (
    <input
      type="text"
      placeholder="Search"
      className={["max-w-full rounded-md border-2 border-transparent bg-slate-200 px-3 py-1 text-lg font-semibold tracking-wider text-slate-600 shadow-sm shadow-slate-300 outline-none transition-all duration-200 placeholder:font-normal placeholder:text-slate-400 hover:shadow-md focus:border-secondary-dark dark:bg-slate-800 dark:text-slate-300 dark:shadow-slate-700 dark:hover:shadow-slate-700", className].join(' ')}
      onChange={(e) => onSearch(e.target.value)}
    />
  )
}

export { SearchBar }

const CardSkeleton = () => {
  return (
    <div className="relative flex flex-row items-center justify-between bg-slate-200 w-96 max-w-[400px] min-w-52 h-48 rounded-lg flex-shrink-0 flex-grow shadow-md duration-300 ease-in-out cursor-pointer dark:bg-slate-800 dark:shadow-slate-600/50 overflow-hidden">
      {/* Card Image and Category */}
      <span className="relative bg-slate-100 dark:bg-slate-500 rounded-lg h-full w-2/5 overflow-hidden">
        <span className="absolute bottom-1 right-1 z-[10] bg-slate-500/70 rounded-lg px-2 py-1 w-24 h-6 dark:bg-slate-700/70 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-slate-500 via-slate-400 to-slate-500 bg-[length:200%_100%] animate-wave"></div>
        </span>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-slate-100 via-slate-200 to-slate-100 dark:from-slate-500 dark:via-slate-600 dark:to-slate-500 bg-[length:200%_100%] animate-wave"></div>
      </span>

      {/* Card Content */}
      <div className="flex flex-grow flex-col justify-start items-start h-full p-2 relative">
        {/* Card Title */}
        <span className="relative w-full h-12 bg-slate-300 rounded-md dark:bg-slate-600 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-slate-300 via-slate-400 to-slate-300 dark:from-slate-600 dark:via-slate-700 dark:to-slate-600 bg-[length:200%_100%] animate-wave"></div>
        </span>

        {/* Card Rate and Count */}
        <span className="relative bg-slate-300 dark:bg-slate-500 w-36 h-6 mt-2 rounded-lg overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-slate-300 via-slate-400 to-slate-300 dark:from-slate-500 dark:via-slate-600 dark:to-slate-500 bg-[length:200%_100%] animate-wave"></div>
        </span>

        {/* Description */}
        <span className="relative w-full h-4 bg-slate-300 rounded-md dark:bg-slate-600 mt-2 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-slate-300 via-slate-400 to-slate-300 dark:from-slate-600 dark:via-slate-700 dark:to-slate-600 bg-[length:200%_100%] animate-wave"></div>
        </span>
        <span className="relative w-3/4 h-4 bg-slate-300 rounded-md dark:bg-slate-600 mt-2 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-slate-300 via-slate-400 to-slate-300 dark:from-slate-600 dark:via-slate-700 dark:to-slate-600 bg-[length:200%_100%] animate-wave"></div>
        </span>

        {/* Add to cart button */}
        <span className="absolute bg-slate-400 dark:bg-slate-700 rounded-md h-10 w-32 right-[0.6rem] bottom-2  overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-slate-400 via-slate-500 to-slate-400 dark:from-slate-700 dark:via-slate-800 dark:to-slate-700 bg-[length:200%_100%] animate-wave"></div>
        </span>
      </div>
    </div>
  );
};

export default CardSkeleton;

import { Link } from 'react-router-dom';

const Main = () => {
  return (
    // Main Content
    <section className="relative flex min-h-[calc(100vh-70px)] w-full flex-row items-center justify-around px-5 *:z-20">
      <h1 className="max-w-xl flex-grow text-center text-6xl text-slate-600 dark:text-slate-200">
        WELCOME TO{' '}
        <strong className="animate-wave bg-gradient-to-r from-primary-dark to-amber-400 bg-[length:200%_100%] bg-clip-text text-7xl text-transparent">
          SHOP NET
        </strong>{' '}
        <br /> YOUR FAVORITE SHOPPING APP
      </h1>
      <section className="flex w-2/5 flex-shrink-0 flex-col items-center justify-center gap-4">
        {/* Logo Image */}
        <img
          src="/logo/1024.png"
          alt="logo"
          className="aspect-square w-full rounded-lg p-8 drop-shadow-card"
        />
        <h3 className="relative top-[-60px] z-10 text-center text-xl font-light text-slate-500">
          <strong className="text-slate-600 dark:text-slate-200">Fast</strong> -{' '}
          <strong className="text-slate-600 dark:text-slate-200">
            Affordable
          </strong>{' '}
          -{' '}
          <strong className="text-slate-600 dark:text-slate-200">Secure</strong>
        </h3>
      </section>

      <Link to="products">
        <div class="group inline-flex absolute left-[50%] translate-x-[-50%] bottom-8 h-12">
          <div class="transitiona-all animate-tilt absolute -inset-px rounded-xl bg-gradient-to-r from-primary-light via-[#FF44EC] to-accent-dark opacity-70 blur-lg duration-1000 group-hover:-inset-1 group-hover:opacity-100 group-hover:duration-200"></div>
          <a
            href="#"
            title="Get quote now"
            class="font-pj relative inline-flex items-center justify-center rounded-xl bg-slate-600 dark:bg-purple-600 px-8 py-2 text-2xl font-bold text-white transition-all duration-200 hover:text-primary-light"
            role="button"
          >
            Shop Now!
          </a>
        </div>
      </Link>
    </section>
  )
};

export { Main };

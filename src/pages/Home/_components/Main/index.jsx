import { Link } from 'react-router-dom'

const Main = () => {
  return (
    // Main Content
        <section className="flex flex-row items-center justify-center min-h-[calc(100vh-70px)] w-full relative">
          <h1 className="flex-grow text-center text-6xl text-slate-200 max-w-xl">
            WELCOME TO{' '}
            <strong className="animate-wave bg-[length:200%_100%] text-transparent bg-clip-text bg-gradient-to-r from-primary-dark to-amber-400 text-7xl">
              SHOP NET
            </strong>{' '}
            <br /> YOUR FAVORITE SHOPPING APP
          </h1>
          <section className="flex flex-col items-center justify-center gap-4 w-2/5 flex-shrink-0">
            {/* Logo Image */}
            <img
              src="/logo/1024.png"
              alt="logo"
              className="w-full rounded-lg aspect-square"
            />
            <h3 className="relative top-[-60px] text-center text-lg text-slate-400 font-thin z-10">
              <strong className="text-slate-200">Fast</strong> -{' '}
              <strong className="text-slate-200">Reliable</strong> -{' '}
              <strong className="text-slate-200">Secure</strong>
            </h3>
          </section>

          <Link to="products">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-3xl py-2 px-3 rounded absolute bottom-8 left-8 transition-colors duration-200 z-[99]">
              SHOP NOW
            </button>
          </Link>
        </section >
  )
};
  
export default Main;
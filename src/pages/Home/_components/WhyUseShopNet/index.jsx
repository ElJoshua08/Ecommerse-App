const WhyUseShopNet = ({ theme}) => {
  return (<section className="flex flex-col items-center justify-center gap-4 w-full min-h-screen flex-shrink-0 bg-slate-200 relative pt-16 mt-4 dark:bg-slate-800 0">
    <img
      src={`/waves/${theme ? (theme == 'dark' ? 'dark' : 'light') : 'dark'
        }/homeSection2.png`}
      alt="wave"
      className="absolute top-0 translate-y-[-97%] left-0 w-full z-[1]"
    />
    <h2 className="text-center text-2xl font-medium text-slate-400 mb-4">
      Why choose ShopNet?
    </h2>
    <div className="flex flex-col items-center justify-center gap-4 w-full">
      <div className="flex flex-col items-center justify-center gap-2 w-full">
        <img
          src="/icons/fast.svg"
          alt="fast"
          className="w-16 h-16"
        />
        <h3 className="text-center text-lg text-slate-400 font-thin">
          <strong className="text-slate-200">Fast</strong>
        </h3>
        <p className="text-center text-sm text-slate-400">
          ShopNet is fast and responsive, providing a seamless shopping
          experience.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 w-full">
        <img
          src="/icons/reliable.svg"
          alt="reliable"
          className="w-16 h-16"
        />
        <h3 className="text-center text-lg text-slate-400 font-thin">
          <strong className="text-slate-200">Reliable</strong>
        </h3>
        <p className="text-center text-sm text-slate-400">
          ShopNet is reliable and secure, providing a trustworthy shopping
          experience.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 w-full">
        <img
          src="/icons/secure.svg"
          alt="secure"
          className="w-16 h-16"
        />
        <h3 className="text-center text-lg text-slate-400 font-thin">
          <strong className="text-slate-200">Secure</strong>
        </h3>
        <p className="text-center text-sm text-slate-400">
          ShopNet is secure and encrypted, providing a safe and secure
          shopping experience.
        </p>
      </div>
    </div>
  </section>)
}

export default WhyUseShopNet;
const WhyChooseUs = ({ theme }) => {
  const descriptions = {
    fast: 'At ShopNet, we prioritize speed. Our intuitive interface ensures quick browsing, seamless navigation, and rapid checkouts. With our efficient logistics, we guarantee that your orders are processed and delivered swiftly, so you can enjoy your purchases without unnecessary delays.',
    affordable:
      'ShopNet offers competitive pricing on a vast selection of products, ensuring you get the best value for your money. We regularly provide discounts, special offers, and exclusive deals, making high-quality items accessible to everyone without breaking the bank.',
    secure:
      'Your safety is our top priority. ShopNet employs state-of-the-art security measures to protect your personal information and financial transactions. Our secure payment gateways and encrypted data storage give you peace of mind, allowing you to shop with confidence knowing your information is safe with us.',
  };

  return (
    <section className="flex flex-col items-center justify-start pt-12 gap-4 w-full min-h-screen flex-shrink-0 bg-slate-200 relative  mt-4 dark:bg-slate-800 0">
      {/* Section decoration */}
      <img
        src={`/waves/${
          theme ? (theme == 'dark' ? 'dark' : 'light') : 'dark'
        }/homeSection2.png`}
        alt="wave"
        className="absolute top-0 translate-y-[-97%] left-0 w-full z-[1]"
      />
      {/* Section title */}
      <h1 className="text-center text-7xl font-medium text-slate-500 dark:text-slate-300 mb-4">
        Why choose us?
      </h1>

      {/* Section content */}
      <div className="flex flex-col items-center justify-center gap-4 w-full">
        {/* Fast Card */}
        <Card
          title="Fast"
          description={descriptions.fast}
          icon="/icons/fast.png"
        />
        <Card
          title="Affordable"
          description={descriptions.affordable}
          icon="/icons/affordable.png"
          inverse={true}
        />
        <Card
          title="Secure"
          description={descriptions.secure}
          icon="/icons/secure.png"
        />
      </div>
    </section>
  );
};

const Card = ({ title, description, icon, inverse }) => {
  return (
    <div
      className={`flex ${
        inverse ? 'flex-row-reverse' : 'flex-row'
      } items-center justify-around gap-6 w-full`}
    >
      <img
        src={icon}
        alt="icon"
        className="w-64 aspect-square drop-shadow-card"
      />
      {/* Card content */}
      <div className="flex flex-col items-center justify-center gap-2 w-2/3 text-center bg-slate-300 dark:bg-slate-700 p-4 rounded-lg border-2 border-slate-400 dark:border-slate-600 shadow-lg shadow-slate-300 dark:shadow-slate-600/50">
        <h3 className="text-center text-5xl text-slate-500 dark:text-slate-200 font-bold">
          {title}
        </h3>
        <p className="text-center text-ld leading-6 text-slate-400 dark:text-slate-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export { WhyChooseUs };

"use client";
import "./globals.css";
const Home: React.FC = () => {
  return (
    <section>
      <div className="p-10 flex flex-col h-full home m-auto">
        <h1>Welcome to British Airways</h1>
        <p className="text-center text-lg pt-10">
          Hello, please come in, have a seat, make yourself comfortable while we
          finish preparing this app for you
        </p>
        <img
          className="pt-10 home-img"
          src="/images/basic-economy.webp"
          alt="Home Image"
        ></img>
        <p className="text-center text-lg pt-10">
          ⚠️ This site use mock data, so the information present here is not
          real
        </p>
      </div>
    </section>
  );
};

export default Home;

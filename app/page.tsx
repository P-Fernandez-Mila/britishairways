import React from "react";
import "./globals.css";
import {
  WELCOME_MESSAGE,
  COME_IN_MESSAGE,
  DISCLAIMER_HOME,
} from "./utils/constants/strings";

const Home: React.FC = () => {
  const welcomeMessage: string = WELCOME_MESSAGE;
  const comeInMessage: string = COME_IN_MESSAGE;
  const disclaimerHome: string = DISCLAIMER_HOME;

  return (
    <section>
      <div className="p-10 flex flex-col h-full home m-auto">
        <h1 className="text-white lobster-regular text-4xl">
          {welcomeMessage}
        </h1>
        <p className="text-center text-lg pt-10 text-white">{comeInMessage}</p>
        <p className="text-center text-lg pt-10 text-white">{disclaimerHome}</p>
      </div>
    </section>
  );
};

export default Home;

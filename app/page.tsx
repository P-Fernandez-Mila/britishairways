"use client";
import { Alert } from "antd";
import "./globals.css";
import {
  WELCOME_MESSAGE,
  COME_IN_MESSAGE,
  DISCLAIMER_HOME,
} from "./constants/strings";

const Home: React.FC = () => {
  return (
    <section>
      <div className="p-10 flex flex-col h-full home m-auto">
        <h1>{WELCOME_MESSAGE}</h1>
        <p className="text-center text-lg pt-10">{COME_IN_MESSAGE}</p>
        <img
          className="pt-10 home-img"
          src="/images/basic-economy.webp"
          alt="Home Image"
        ></img>
        <p className="text-center text-lg pt-10">{DISCLAIMER_HOME}</p>
      </div>
    </section>
  );
};

export default Home;

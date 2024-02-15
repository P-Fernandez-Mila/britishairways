"use client";
import React, { FC, useContext, MouseEvent } from "react";
import { Dropdown, MenuProps } from "antd";
import Avatar from "react-avatar";
import Link from "next/link";
import { LoginStateContext } from "@/utils/LoginState";
import { useRouter } from "next/navigation";

const NavBar: FC = () => {
  const [isLogged, setIsLogged] = useContext(LoginStateContext);
  const router = useRouter();

  const logout = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsLogged(false);
    router.push("/");
  };

  const guestItems: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Link target="_self" rel="noopener noreferrer" href="/login">
          Login
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link target="_self" rel="noopener noreferrer" href="">
          Create Account
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <a target="_self" rel="noopener noreferrer" href="/Search">
          Search
        </a>
      ),
    },
  ];

  const loggedItems: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Link target="_self" rel="noopener noreferrer" href="/profile">
          Profile
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link target="_self" rel="noopener noreferrer" href="/upcomingFlights">
          Upcoming Flights
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link target="_self" rel="noopener noreferrer" href="/milesAndPoints">
          Miles and Points
        </Link>
      ),
    },
    {
      key: "4",
      label: (
        <Link target="_self" rel="noopener noreferrer" href="/myTrips">
          My Trips
        </Link>
      ),
    },
    {
      key: "5",
      label: (
        <Link target="_self" rel="noopener noreferrer" href="/search">
          Search
        </Link>
      ),
    },
    {
      key: "6",
      label: (
        <Link
          target="_self"
          rel="noopener noreferrer"
          href="/"
          onClick={logout}
        >
          Logout
        </Link>
      ),
    },
  ];

  const items: MenuProps["items"] = isLogged ? loggedItems : guestItems;

  const avatarSource: string = isLogged
    ? "images/avatar.webp"
    : "/images/guest.jpeg";

  return (
    <div className="w-full flex items-top p-5 bg-">
      <div className="flex items-start max-w-44">
        <Link href="/" className="cursor-pointer">
          <img
            src="/images/640px-British_Airways_Logo.svg.png"
            className="w-100"
          ></img>
        </Link>
      </div>
      <div className="grow"></div>
      <Dropdown overlayClassName="menu-class" menu={{ items }}>
        <div className="flex items-end">
          {" "}
          <Avatar
            src={avatarSource}
            className="flex-none order-last"
            size="50"
            round="10px"
          />
        </div>
      </Dropdown>
    </div>
  );
};

export default NavBar;

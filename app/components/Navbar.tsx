"use client";
import React, { FC, useContext, MouseEvent } from "react";
import { Avatar, Dropdown, MenuProps } from "antd";
import { UserOutlined } from "@ant-design/icons";
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
        <Link target="_self" rel="noopener noreferrer" href="">
          Upcoming Trips
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link target="_self" rel="noopener noreferrer" href="">
          Miles and Point
        </Link>
      ),
    },
    {
      key: "4",
      label: (
        <Link target="_self" rel="noopener noreferrer" href="">
          Trip History
        </Link>
      ),
    },
    {
      key: "5",
      label: (
        <Link target="_self" rel="noopener noreferrer" href="">
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

  const avatarSource: string | null = isLogged ? "/images/avatar.webp" : null;

  return (
    <div className="h-24 w-full flex items-center p-5">
      <Link href="/" className="cursor-pointer">
        {
          <Avatar
            className="flex-none order-first w-12 m-"
            size={120}
            icon={<UserOutlined />}
            src="/images/logo-square.png"
            shape="square"
            alt="logo"
          />
        }
      </Link>

      <div className="grow"></div>
      <Dropdown overlayClassName="menu-class" menu={{ items }}>
        <Avatar
          src={avatarSource}
          className="flex-none order-last"
          size={50}
          icon={<UserOutlined />}
          alt="profile picture"
          style={{ backgroundColor: "rgb(58, 94, 149)", color: "#FFFFFF" }}
        />
      </Dropdown>
    </div>
  );
};

export default NavBar;

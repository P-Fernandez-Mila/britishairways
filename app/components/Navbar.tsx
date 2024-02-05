"use client";
import { Avatar, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";

type NavBarProps = {
  isLogged: boolean;
  setIsLogged: (value: boolean | ((prevValue: boolean) => boolean)) => void;
};

const NavBar: React.FC<NavBarProps> = ({ isLogged }) => {
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
          ></Avatar>
        }
      </Link>

      <div className="grow"></div>
      <Link href="/profile" className="cursor-pointer">
        <Avatar
          src={avatarSource}
          className="flex-none order-last"
          size={50}
          icon={<UserOutlined />}
          alt="profile picture"
          style={{ backgroundColor: "rgb(58 94 149)", color: "#FFFFFF" }}
        ></Avatar>
      </Link>
    </div>
  );
};

export default NavBar;

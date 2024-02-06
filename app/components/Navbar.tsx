"use client";
import { Avatar, Button, Dropdown, MenuProps } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";

type NavBarProps = {
  isLogged: boolean;
  setIsLogged: (value: boolean | ((prevValue: boolean) => boolean)) => void;
};

const NavBar: React.FC<NavBarProps> = ({ isLogged }) => {
  const items: MenuProps["items"] = [
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
        <a target="_self" rel="noopener noreferrer" href="createAccount">
          Create Account
        </a>
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
      <Dropdown
        menu={{ items }}
        placement="bottom"
        arrow={{ pointAtCenter: true }}
      >
        <Avatar
          src={avatarSource}
          className="flex-none order-last"
          size={50}
          icon={<UserOutlined />}
          alt="profile picture"
          style={{ backgroundColor: "rgb(58 94 149)", color: "#FFFFFF" }}
        >
          <Button></Button>
        </Avatar>
      </Dropdown>
    </div>
  );
};

export default NavBar;

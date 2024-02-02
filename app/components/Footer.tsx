"use client";
import { Avatar, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <div className="h-10 w-100 text-white w-full bg-black absolute bottom-0 flex justify-center items-center">
      Powered by Globant
    </div>
  );
};

export default Footer;

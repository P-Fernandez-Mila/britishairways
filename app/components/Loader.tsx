"use client";
import { Spin } from "antd";

const Loader: React.FC = () => {
  return (
    <div
      className="flex align-center w-full justify-center mt-10"
      aria-label="Loader"
    >
      <Spin size="large" />
    </div>
  );
};
export default Loader;

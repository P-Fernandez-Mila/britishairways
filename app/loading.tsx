"use client";
import { Spin } from "antd";
const Loading: React.FC = () => {
  return (
    <div className="flex center h-full justify-center items-center">
      <Spin> </Spin>
    </div>
  );
};
export default Loading;

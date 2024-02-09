"use client";
import { Spin } from "antd";
export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex center h-full justify-center items-center">
      <Spin></Spin>
    </div>
  );
}

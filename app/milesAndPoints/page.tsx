"use client";
import React, { useEffect, useState } from "react";
import { Spin, Alert, Table } from "antd";
import { API } from "../constants/strings";
import Link from "next/link";

interface Travel {
  year: string;
  flightsTaken: number;
  milesEarned: number;
}

interface MilesAndPoints {
  tierStatus: string;
  milesBalance: number;
  pointsBalance: number;
  travelHistory: Travel[];
}

const Profile: React.FC = () => {
  const [milesAndPoints, setMilesAndPoints] = useState<MilesAndPoints | null>(
    null
  );
  useEffect(() => {
    const getMilesAndPoints = async () => {
      try {
        const response = await fetch(`${API}/milesAndPoints`);
        const data = await response.json();
        setMilesAndPoints(data);
        console.log(data);
      } catch (error) {
        return (
          <Alert
            message="Something went wrong please contact one of our stores to get support"
            type="error"
          />
        );
      }
    };

    getMilesAndPoints();
  }, []);

  const dataSource = milesAndPoints?.travelHistory.map((travel, index) => ({
    key: index,
    year: travel.year,
    flightsTaken: travel.flightsTaken,
    milesEarned: travel.milesEarned,
  }));

  const columns = [
    {
      title: "Year",
      dataIndex: "year",
      key: "year",
      className: "bg-gray-200",
    },
    {
      title: "Flights Taken",
      dataIndex: "flightsTaken",
      key: "flightsTaken",
      className: "bg-gray-200",
    },
    {
      title: "Miles Earned",
      dataIndex: "milesEarned",
      key: "milesEarned",
      className: "bg-gray-200",
    },
  ];
  const loyaltyURL: string = `https://www.britishairways.com/en-gb/executive-club/tiers-and-benefits/${milesAndPoints?.tierStatus.toLowerCase()}-benefits`;
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Frequent Flyer Profile</h1>
      <div className="bg-blue-100 p-4 flex flex-col ">
        {milesAndPoints ? (
          <>
            <p className="mb-2">
              <span className="font-bold">Tier Status:</span>{" "}
              {milesAndPoints?.tierStatus}
            </p>
            <p className="mb-2">
              <span className="font-bold">Miles Balance:</span>{" "}
              {milesAndPoints?.milesBalance}
            </p>
            <p className="mb-2">
              <span className="font-bold">Points Balance:</span>{" "}
              {milesAndPoints?.pointsBalance}
            </p>
            <Link href={loyaltyURL} className="text-blue-500 w-full">
              Check your benefits!
            </Link>
            <h3 className="text-lg font-bold mt-6 mb-2">Travel History</h3>
            <Table
              className="w-full border-collapse"
              dataSource={dataSource}
              columns={columns}
              bordered
              pagination={false}
            />
          </>
        ) : (
          <div
            className="flex align-center w-full justify-center mt-10"
            aria-label="Loader"
          >
            <Spin size="large" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;

/*     <div>
      milesAndPoints ? (
      <div className="bg-gray-100 p-4">
        <h2 className="text-2xl font-bold mb-4">Frequent Flyer Profile</h2>
        <p className="mb-2">
          <span className="font-bold">Tier Status:</span>{" "}
          {milesAndPoints?.tierStatus}
        </p>
        <p className="mb-2">
          <span className="font-bold">Miles Balance:</span>{" "}
          {milesAndPoints?.milesBalance}
        </p>
        <p className="mb-2">
          <span className="font-bold">Points Balance:</span>{" "}
          {milesAndPoints?.pointsBalance}
        </p>
        <h3 className="text-lg font-bold mt-6 mb-2">Travel History</h3>
        <Table
          className="w-full border-collapse"
          dataSource={dataSource}
          columns={columns}
          bordered
        />
      </div>
      ) : (<div>Loader</div>
      );
    </div>*/

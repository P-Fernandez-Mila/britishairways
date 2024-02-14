"use client";
import React, { useEffect, useState } from "react";
import { Spin, Table } from "antd";
import Loader from "@/components/Loader";
import ErrorReturnToHome from "@/components/ErrorReturnToHome";
import {
  API,
  SERVER_RESPONSE_ERROR,
  SERVER_RESPONSE_UNEXPECTED_ERROR,
  createLoyaltyURL,
} from "../utils/constants/strings";
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
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const getMilesAndPoints = async () => {
      try {
        const response = await fetch(`${API}/milesAndPoints`);
        if (!response.ok) {
          setError(SERVER_RESPONSE_ERROR);
          throw new Error(SERVER_RESPONSE_ERROR);
        }
        const data: MilesAndPoints | { error: string } = await response.json();
        if ("error" in data) {
          setError(data.error);
        } else {
          setMilesAndPoints(data);
        }
      } catch (err) {
        setError(SERVER_RESPONSE_UNEXPECTED_ERROR);
      } finally {
        setLoading(false);
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

  if (loading) return <Loader />;
  if (error) return <ErrorReturnToHome error={error} />;
  if (!milesAndPoints)
    return (
      <div>
        <p>No data found</p>
      </div>
    );

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
            <Link
              href={createLoyaltyURL(milesAndPoints?.tierStatus)}
              className="text-blue-500 w-full"
              target="_blank"
            >
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

"use client";
import React, { useState, useEffect } from "react";
import { passengerTypeConverter } from "../utils/passengerTypeConverter";
import Loader from "@/components/Loader";
import ErrorReturnToHome from "@/components/ErrorReturnToHome";
import Trips from "@/components/Trips";
import {
  API,
  SERVER_RESPONSE_ERROR,
  SERVER_RESPONSE_UNEXPECTED_ERROR,
} from "../utils/constants/strings";

interface Segment {
  departureAirport: string;
  arrivalAirport: string;
  departureTime: string;
  arrivalTime: string;
  flightNumber: string;
  airlineCode: string;
  class: string;
}

interface Trip {
  pnr: string;
  itinerary: Segment[];
}

interface Passenger {
  firstName: string;
  lastName: string;
  passengerType: string;
}

interface MyTrips {
  passenger: Passenger;
  trips: Trip[];
}

const ItineraryList: React.FC = () => {
  const [myTrips, setMyTrips] = useState<MyTrips | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${API}/myTrips`);
        if (!response.ok) {
          setError(SERVER_RESPONSE_ERROR);
          throw new Error(SERVER_RESPONSE_ERROR);
        }
        const data: MyTrips | { error: string } = await response.json();
        if ("error" in data) {
          setError(data.error);
        } else {
          setMyTrips(data as MyTrips);
        }
      } catch (err) {
        setError(SERVER_RESPONSE_UNEXPECTED_ERROR);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <Loader />;
  if (error) return <ErrorReturnToHome error={error} />;
  if (!myTrips)
    return (
      <div>
        <p>No trips found</p>
      </div>
    );

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">My trips</h1>
        <p className="mb-2">
          <strong>Name:</strong> {myTrips.passenger.firstName}
        </p>
        <p className="mb-2">
          <strong>Lastname:</strong>
          {myTrips.passenger.lastName}
        </p>
        <p className="mb-4">
          <strong>Passenger Type:</strong>{" "}
          {passengerTypeConverter(myTrips.passenger.passengerType)}
        </p>

        <Trips trips={myTrips.trips} />
      </div>
    </div>
  );
};

export default ItineraryList;

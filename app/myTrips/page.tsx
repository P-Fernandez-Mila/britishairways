"use client";
import React, { useState, useEffect } from "react";
import { passengerTypeConverter } from "../utils/passengerTypeConverter";
import { formatDateToUserFriendly } from "@/utils/formatDateToUserFriendly";
import { API } from "../constants/strings";

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
          const errorMessage: string = "There was an error on the server call";
          setError(errorMessage);
          throw new Error(errorMessage);
        }
        const data: MyTrips | { error: string } = await response.json();
        console.log(data);
        if ("error" in data) {
          setError(data.error);
        } else {
          setMyTrips(data as MyTrips);
        }
      } catch (err) {
        setError("An error occurred while fetching data.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error)
    return <div className="text-center text-red-500 py-10">Error: {error}</div>;
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
          <strong>Name:</strong> {myTrips.passenger.firstName}{" "}
          {myTrips.passenger.lastName}
        </p>
        <p className="mb-4">
          <strong>Passenger Type:</strong>{" "}
          {passengerTypeConverter(myTrips.passenger.passengerType)}
        </p>

        <h2 className="text-xl font-semibold mb-3">Trips</h2>
        {myTrips.trips.map((trip, index) => (
          <div key={index} className="mb-6 p-4 bg-gray-100 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">
              Booking reference: {trip.pnr}
            </h3>
            <h4 className="font-medium mb-2">Itinerary</h4>
            {trip.itinerary.map((segment, idx) => (
              <div key={idx} className="mb-3 p-3 bg-gray-200 rounded-md">
                <p className="mb-1">
                  <strong>Flight Number:</strong> {segment.flightNumber}
                </p>
                <p className="mb-1">
                  <strong>Airline Code:</strong> {segment.airlineCode}
                </p>
                <p className="mb-1">
                  <strong>Class:</strong> {segment.class}
                </p>
                <p className="mb-1">
                  <strong>Departure:</strong> {segment.departureAirport} at{" "}
                  {formatDateToUserFriendly(segment.departureTime)}
                </p>
                <p className="mb-1">
                  <strong>Arrival:</strong> {segment.arrivalAirport} at{" "}
                  {formatDateToUserFriendly(segment.arrivalTime)}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItineraryList;

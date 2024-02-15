"use client";
import React from "react";
import { formatDateToUserFriendly } from "@/utils/formatDateToUserFriendly";

interface Trip {
  pnr: string;
  passenger: Passenger;
  itinerary: ItineraryItem[];
}

interface Passenger {
  firstName: string;
  lastName: string;
  passengerType: "ADT" | "CHD" | "INF";
}

interface ItineraryItem {
  departureAirport: string;
  arrivalAirport: string;
  departureTime: string;
  arrivalTime: string;
  flightNumber: string;
  airlineCode: string;
  class: "Economy" | "Business" | "First";
}
const Trips: React.FC<{ trips: Trip[] }> = ({ trips }) => {
  return (
    <>
      <h2 className="text-xl font-semibold mb-3">Tripasdasds</h2>

      <div className="mb-6 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-semibold mb-2"></h3>
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
    </>
  );
};
export default Trips;

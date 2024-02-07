"use client";
import React, { useEffect, useState } from "react";
import { API } from "../constants/strings";

interface Flight {
  flightNumber: string;
  departureAirport: string;
  arrivalAirport: string;
  departureDate: string;
}

type UpComingFlights = Flight[];

const Profile: React.FC = () => {
  const [upComingFlights, setUpComingFlights] =
    useState<UpComingFlights | null>(null);

  useEffect(() => {
    const getFrequentFlyerProfile = async () => {
      try {
        const response = await fetch(`${API}/upComingFlights`);
        const data = await response.json();
        setUpComingFlights(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    getFrequentFlyerProfile();
  }, []);
  console.log(upComingFlights);
  return (
    <section>
      <div className=" w-full">
        <h1>Upcoming Flights</h1>
        {upComingFlights != null ? (
          <div className="flex flex-col center">
            {upComingFlights.map((flight, index) => (
              <div key={index} className="pb-4 text-left ml-2">
                <h3 className="text-xl mb-2">
                  ✈️ Flight Number: {flight.flightNumber}
                  <hr className="mt-2"></hr>
                </h3>
                <p className="mb-1 text-left">
                  🛫 Departure Airport: {flight.departureAirport}
                </p>
                <p className="mb-1 text-left">
                  🛬 Arrival Airport: {flight.arrivalAirport}
                </p>
                <p className="mb-1 text-left">
                  🗓️ Departure Date: {flight.departureDate}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div>No data available</div>
        )}
      </div>
    </section>
  );
};

export default Profile;

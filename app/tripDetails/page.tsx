"use client";
import React, { useEffect, useState } from "react";
import { API } from "../constants/strings";
import { Alert, Spin } from "antd";
import { passengerTypeConverter } from "../utils/passengerTypeConverter";
interface Segment {
  departureAirport: string;
  arrivalAirport: string;
  departureTime: string;
  arrivalTime: string;
  flightNumber: string;
  airlineCode: string;
  class: string;
}

interface Traveler {
  firstName: string;
  lastName: string;
  passengerType: string;
}

interface ContactInformation {
  email: string;
  phone: string;
}

interface Ticketing {
  ticketNumbers: string[];
  issueDate: string;
  status: string;
}

interface TravelAgency {
  name: string;
  agentID: string;
  contact: string;
}

interface Remark {
  type: string;
  text: string;
}

interface TripDetails {
  pnr: string;
  bookingReference: string;
  travelers: Traveler[];
  itinerary: { segment: Segment }[];
  contactInformation: ContactInformation;
  ticketing: Ticketing;
  travelAgency: TravelAgency;
  remarks: Remark[];
}

type ApiResponse = {
  tripDetails: TripDetails;
};

interface Props {
  apiResponse: ApiResponse;
}

/*const TripDetailsComponent: React.FC<Props> = ({ apiResponse }) => {
  const { tripDetails } = apiResponse; */
const TripDetails: React.FC = () => {
  const [tripDetails, setTripDetails] = useState<TripDetails | null>(null);
  useEffect(() => {
    const getFrequentFlyerProfile = async () => {
      try {
        const response = await fetch(`${API}/tripDetails`);
        const data = await response.json();
        setTripDetails(data);
      } catch (error) {
        console.error(error);
        return (
          <Alert
            message="Something went wrong please contact one of our stores to get support"
            type="error"
          />
        );
      }
    };

    getFrequentFlyerProfile();
  }, []);

  return (
    <>
      <h1 className="text-2xl font-bold">Trip Details</h1>{" "}
      {tripDetails ? (
        <div className="p-4 mb-100px">
          <div className="border border-gray-300 rounded p-4 mb-4">
            <p>PNR: {tripDetails.pnr}</p>
            <p>Booking Reference: {tripDetails.bookingReference}</p>
          </div>
          <h3 className="text-lg font-bold">Travelers:</h3>
          <ul className="border border-gray-300 rounded p-4 mb-4">
            {tripDetails.travelers.map((traveler, index) => (
              <li key={index}>
                {traveler.firstName} {traveler.lastName} -
                {passengerTypeConverter(traveler.passengerType)}
              </li>
            ))}
          </ul>
          <h3 className="text-lg font-bold">Itinerary:</h3>
          <ul className="border border-gray-300 rounded p-4 mb-4">
            {tripDetails.itinerary.map((item, index) => (
              <li key={index}>
                <p>Segment {index + 1}:</p>
                <p>Departure Airport: {item.segment.departureAirport}</p>
                <p>Arrival Airport: {item.segment.arrivalAirport}</p>
                <p>Departure Time: {item.segment.departureTime}</p>
                <p>Arrival Time: {item.segment.arrivalTime}</p>
                <p>Flight Number: {item.segment.flightNumber}</p>
                <p>Airline Code: {item.segment.airlineCode}</p>
                <p>Class: {item.segment.class}</p>
              </li>
            ))}
          </ul>
          <h3 className="text-lg font-bold">Contact Information:</h3>
          <div className="border border-gray-300 rounded p-4 mb-4">
            <p>Email: {tripDetails.contactInformation.email}</p>
            <p>Phone: {tripDetails.contactInformation.phone}</p>
          </div>
          <h3 className="text-lg font-bold">Ticketing:</h3>
          <div className="border border-gray-300 rounded p-4 mb-4">
            <p>Ticket Numbers:</p>
            <ul>
              {tripDetails.ticketing.ticketNumbers.map(
                (ticketNumber, index) => (
                  <li key={index}>{ticketNumber}</li>
                )
              )}
            </ul>
            <p>Issue Date: {tripDetails.ticketing.issueDate}</p>
            <p>Status: {tripDetails.ticketing.status}</p>
          </div>
          <h3 className="text-lg font-bold">Travel Agency:</h3>
          <div className="border border-gray-300 rounded p-4 mb-4">
            <p>Name: {tripDetails.travelAgency.name}</p>
            <p>Agent ID: {tripDetails.travelAgency.agentID}</p>
            <p>Contact: {tripDetails.travelAgency.contact}</p>
          </div>
          <h3 className="text-lg font-bold">Remarks:</h3>
          <ul className="border border-gray-300 rounded p-4">
            {tripDetails.remarks.map((remark, index) => (
              <li key={index}>
                Type: {remark.type}, Text: {remark.text}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div
          className="flex align-center w-full justify-center mt-10"
          aria-label="Loader"
        >
          <Spin size="large" />
        </div>
      )}
    </>
  );
};

export default TripDetails;

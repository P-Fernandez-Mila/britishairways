"use client";
import React, { useEffect, useState } from "react";
import {
  API,
  SERVER_RESPONSE_ERROR,
  SERVER_RESPONSE_UNEXPECTED_ERROR,
} from "../utils/constants/strings";
import { passengerTypeConverter } from "../utils/passengerTypeConverter";
import Loader from "@/components/Loader";
import ErrorReturnToHome from "@/components/ErrorReturnToHome";
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

const TripDetails: React.FC = () => {
  const [tripDetails, setTripDetails] = useState<TripDetails | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const getFrequentFlyerProfile = async () => {
      try {
        const response = await fetch(`${API}/tripDetails`);
        if (!response.ok) {
          setError(SERVER_RESPONSE_ERROR);
          throw new Error(SERVER_RESPONSE_ERROR);
        }
        const data = await response.json();
        if ("error" in data) {
          setError(data.error);
        } else {
          setTripDetails(data);
        }
      } catch (err) {
        setError(SERVER_RESPONSE_UNEXPECTED_ERROR);
      } finally {
        setLoading(false);
      }
    };

    getFrequentFlyerProfile();
  }, []);
  if (loading) return <Loader />;
  if (error) return <ErrorReturnToHome error={error} />;
  if (!tripDetails)
    return (
      <div>
        <p>No trips found</p>
      </div>
    );
  return (
    <>
      <h1 className="text-2xl font-bold">Trip Details</h1>{" "}
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
            {tripDetails.ticketing.ticketNumbers.map((ticketNumber, index) => (
              <li key={index}>{ticketNumber}</li>
            ))}
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
    </>
  );
};

export default TripDetails;

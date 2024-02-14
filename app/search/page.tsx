"use client";
import React, { useState, useEffect } from "react";
import { Button, Form, Input, Alert } from "antd";
import { passengerTypeConverter } from "../utils/passengerTypeConverter";
import Loader from "@/components/Loader";
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

interface ErrorWithMessage {
  error: string;
  message: string;
}

type FieldType = {
  lastname?: string;
  pnr?: string;
};

const ItineraryList: React.FC = () => {
  const [myTrips, setMyTrips] = useState<MyTrips | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [lastname, setLastname] = useState("Simpson");
  const [pnr, setPnr] = useState("ZT2345");

  const handleLastName = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setLastname(event.target.value);
  };

  const handlePnr = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPnr(event.target.value);
  };
  async function fetchData() {
    setLoading(true);
    //Reset values for error message and for trips found
    setError(null);
    setMyTrips(null);
    try {
      const response = await fetch(
        `${API}/search?lastname=${lastname}&pnr=${pnr}`
      );
      if (!response.ok) {
        setError(SERVER_RESPONSE_ERROR);
      }
      const data: MyTrips | ErrorWithMessage = await response.json();
      if ("error" in data) {
        console.log(typeof data.message);
        setError(data.message);
      } else {
        setMyTrips(data as MyTrips);
      }
    } catch (err) {
      setError(SERVER_RESPONSE_UNEXPECTED_ERROR);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {}, [myTrips, error]);

  if (loading) return <Loader />;

  return (
    <section>
      <h1>Search</h1>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        autoComplete="on"
        onFinish={fetchData}
      >
        <Form.Item<FieldType>
          label="Lastname"
          name="lastname"
          rules={[{ required: true, message: "Please enter a last name" }]}
          initialValue={lastname}
        >
          <Input onChange={handleLastName} value={lastname} />
        </Form.Item>

        <Form.Item<FieldType>
          label="Booking reference   "
          name="pnr"
          rules={[{ required: true, message: "Please enter a booking number" }]}
          initialValue={pnr}
        >
          <Input onChange={handlePnr} value={pnr} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Search
          </Button>
        </Form.Item>
      </Form>
      <Alert
        message="In this version, only the last name 'Simpson'&#10; and these PNRs return results: [ZT1234, ZT2345, ZT3456, ZT4567, ZT5678]."
        type="info"
      />
      {error && <Alert message={error} type="error" />}
      {myTrips && (
        <div className="container mx-auto p-4">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h1 className="text-2xl font-bold mb-4">My trips</h1>
            <p className="mb-2">
              <strong>Name:</strong> {myTrips.passenger.firstName}
            </p>
            <p className="mb-2">
              <strong>Lastname:</strong> {myTrips.passenger.lastName}
            </p>
            <p className="mb-4">
              <strong>Passenger Type:</strong>{" "}
              {passengerTypeConverter(myTrips.passenger.passengerType)}
            </p>

            <Trips trips={myTrips.trips} />
          </div>
        </div>
      )}
    </section>
  );
};

export default ItineraryList;

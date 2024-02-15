import React from "react";
import UpcomingFlights from "../../../app/upcomingFlights/page";
import { render, screen, waitFor } from "@testing-library/react";
import { upcomingFlights } from "../../../_mocks_/upcomingFlights";

fetchMock.enableMocks();

beforeEach(() => {
  // Reset mocks before each test
  fetchMock.resetMocks();
});
describe("Upcoming Flights", () => {
  it("Validate layout", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(upcomingFlights));
    render(<UpcomingFlights />);

    const loader = screen.getByLabelText("Loader");
    expect(loader).toBeInTheDocument();

    await waitFor(() => {
      expect(loader).not.toBeInTheDocument();
      const title = screen.getByText("Upcoming Flights");
      expect(title).toBeInTheDocument();

      const flightElements = document.querySelectorAll(".pb-4.text-left.ml-2");
      expect(flightElements.length).toBe(2);

      // Test the first flight
      const firstFlight = flightElements[0];
      const flightNumberElement = firstFlight.querySelector("h3");
      const departureAirportElement =
        firstFlight.querySelector("p:nth-child(2)");
      const arrivalAirportElement = firstFlight.querySelector("p:nth-child(3)");
      const departureDateElement = firstFlight.querySelector("p:nth-child(4)");
      const tripDetailsLinkElement = firstFlight.querySelector("a");
      expect(flightNumberElement?.textContent).toContain(
        "✈️ Flight Number: SP987"
      );
      expect(departureAirportElement?.textContent).toContain(
        "🛫 Departure Airport: SPF"
      );
      expect(arrivalAirportElement?.textContent).toContain(
        "🛬 Arrival Airport: LAX"
      );
      expect(departureDateElement?.textContent).toContain(
        "🗓️ Departure Date: 2023-07-15"
      );
      expect(tripDetailsLinkElement?.getAttribute("href")).toBe("/tripDetails");
      // Test the second flight
      const secondFlight = flightElements[1];
      const flightNumberElement2 = secondFlight.querySelector("h3");
      const departureAirportElement2 =
        secondFlight.querySelector("p:nth-child(2)");
      const arrivalAirportElement2 =
        secondFlight.querySelector("p:nth-child(3)");
      const departureDateElement2 =
        secondFlight.querySelector("p:nth-child(4)");
      const tripDetailsLinkElement2 = secondFlight.querySelector("a");

      expect(flightNumberElement2?.textContent).toContain(
        "✈️ Flight Number: SP654"
      );
      expect(departureAirportElement2?.textContent).toContain(
        "🛫 Departure Airport: LAX"
      );
      expect(arrivalAirportElement2?.textContent).toContain(
        "🛬 Arrival Airport: SPF"
      );
      expect(departureDateElement2?.textContent).toContain(
        "🗓️ Departure Date: 2023-07-20"
      );
      expect(tripDetailsLinkElement2?.getAttribute("href")).toBe(
        "/tripDetails"
      );
    });
  });
});

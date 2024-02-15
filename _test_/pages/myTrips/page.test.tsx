import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import ItineraryList from "../../../app/myTrips/page";
import { myTrips } from "../../../_mocks_/mytrips";
// Enable fetch mocks before tests
fetchMock.enableMocks();

beforeEach(() => {
  // Reset mocks before each test
  fetchMock.resetMocks();
});

describe("ItineraryList", () => {
  it("renders correctly", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(myTrips));
    render(<ItineraryList />);
    const loader = screen.getByLabelText("Loader");
    expect(loader).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText("My trips")).toBeInTheDocument();
      expect(screen.getByTestId("name-label")).toHaveTextContent("Name:");
      expect(screen.getByTestId("name-value")).toHaveTextContent("Bart");
      expect(screen.getByTestId("lastname-label")).toHaveTextContent(
        "Lastname:"
      );
      expect(screen.getByTestId("lastname-value")).toHaveTextContent("Simpson");
      expect(screen.getByTestId("passenger-label")).toHaveTextContent(
        "Passenger Type:"
      );
      expect(screen.getByTestId("passenger-value")).toHaveTextContent("Child");
      expect(screen.getByText("Booking reference: ZT1234")).toBeInTheDocument();
      expect(screen.getByText("AB101")).toBeInTheDocument();
      expect(screen.getByText("AB")).toBeInTheDocument();
    });
  });
});

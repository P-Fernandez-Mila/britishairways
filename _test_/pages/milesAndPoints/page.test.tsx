import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { milesAndPoints } from "../../../_mocks_/milesAndPoints";
import MilesAndPoints from "../../../app/milesAndPoints/page";

fetchMock.enableMocks();

beforeEach(() => {
  // Reset mocks before each test
  fetchMock.resetMocks();
});
describe("Upcoming Flights", () => {
  it("Validate layout", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(milesAndPoints));
    render(<MilesAndPoints />);

    await waitFor(() => {
      const tierLabel = screen.getByTestId("tier-label");
      const tierValue = screen.getByTestId("tier-value");
      const milesLabel = screen.getByTestId("miles-label");
      const milesValue = screen.getByTestId("miles-value");
      const pointsLabel = screen.getByTestId("points-label");
      const pointsValue = screen.getByTestId("points-value");
      const benefitsLink = screen.getByTestId("benefits-link");
      const travelHistoryTable = document.querySelector("table");

      expect(tierLabel).toHaveTextContent("Tier Status:");
      expect(tierValue).toHaveTextContent("Silver");
      expect(milesLabel).toHaveTextContent("Miles Balance:");
      expect(milesValue).toHaveTextContent("15000");
      expect(pointsLabel).toHaveTextContent("Points Balance:");
      expect(pointsValue).toHaveTextContent("5000");
      expect(benefitsLink.getAttribute("href")).toBe(
        "https://www.britishairways.com/en-gb/executive-club/tiers-and-benefits/silver-benefits"
      );
      expect(travelHistoryTable).toBeInTheDocument();
    });
  });
});

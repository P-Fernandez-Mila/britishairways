import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe } from "node:test";
import fetchMock from "jest-fetch-mock";
import userEvent from "@testing-library/user-event";
import Profile from "@/profile/page";
import {
  CONTACT_INFORMATION,
  EXECUTIVE_CLUB,
  PREFERENCES,
  SERVER_RESPONSE_UNEXPECTED_ERROR,
} from "../../../app/utils/constants/strings";

// Enable fetch mocks before tests
fetchMock.enableMocks();

beforeEach(() => {
  // Reset mocks before each test
  fetchMock.resetMocks();
});

describe("Profile Page", () => {
  it("Validate Personal Information, Executive Club, Contact Information and Preferences", async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        name: "Bart",
        lastName: "Simpson",
        dateOfBirth: "2000-04-01",
        loyaltyData: {
          tierStatus: "Silver",
          milesBalance: 15000,
          pointsBalance: 5000,
        },
        contactInformation: {
          email: "elbarto@example.com",
          phone: "+1234567890",
          address: {
            street: "742 Evergreen Terrace",
            city: "Springfield",
            state: "IL",
            zipCode: "62704",
            country: "USA",
          },
        },
        preferences: {
          seatPreference: "Window",
          mealPreference: "Children's Meal",
          specialAssistance: "None",
          newsletterSubscription: true,
        },
      })
    );
    render(<Profile />);
    const loader = screen.getByLabelText("Loader");
    expect(loader).toBeInTheDocument();

    await waitFor(() => {
      expect(loader).not.toBeInTheDocument();
      const nameLabel = screen.getByLabelText("Name");
      expect(nameLabel).toBeInTheDocument();
      const nameValue = screen.getByDisplayValue("Bart");
      expect(nameValue).toBeInTheDocument();

      const lastNameLabel = screen.getByLabelText("Last Name");
      expect(lastNameLabel).toBeInTheDocument();
      const lastNameValue = screen.getByDisplayValue("Simpson");
      expect(lastNameValue).toBeInTheDocument();

      const dateOfBirthLabel = screen.getByLabelText("Date of Birth");
      expect(dateOfBirthLabel).toBeInTheDocument();
      const dateOfBirthLabelValue = screen.getByDisplayValue("2000-04-01");
      expect(dateOfBirthLabelValue).toBeInTheDocument();
    });
    const executiveLabel = screen.getByText(EXECUTIVE_CLUB);
    const contactLabel = screen.getByText(CONTACT_INFORMATION);
    const preferencesLabel = screen.getByText(PREFERENCES);

    expect(executiveLabel).toBeInTheDocument();
    expect(contactLabel).toBeInTheDocument();
    expect(preferencesLabel).toBeInTheDocument();
    await userEvent.click(executiveLabel);
    const tier = screen.getByText("Tier: Silver");
    expect(tier).toBeInTheDocument();
    await userEvent.click(contactLabel);
    const email = screen.getByText("Email: elbarto@example.com");
    expect(email).toBeInTheDocument();
    await userEvent.click(preferencesLabel);
    const seat = screen.getByText("Seat: Window");
    expect(seat).toBeInTheDocument();
  });
  it("Validate error response", async () => {
    fetchMock.mockRejectOnce(new Error(SERVER_RESPONSE_UNEXPECTED_ERROR));
    render(<Profile />);
    const loader = screen.getByLabelText("Loader");
    expect(loader).toBeInTheDocument();

    await waitFor(() => {
      expect(loader).not.toBeInTheDocument();
      const error = screen.getByText(SERVER_RESPONSE_UNEXPECTED_ERROR);
      expect(error).toBeInTheDocument();
    });
  });
});

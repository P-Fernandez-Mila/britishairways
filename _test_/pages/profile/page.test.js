import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe } from "node:test";
import Profile from "@/profile/page";

// Enable fetch mocks before tests
fetchMock.enableMocks();

beforeEach(() => {
  // Reset mocks before each test
  fetchMock.resetMocks();
});
describe("Validate Layout", () => {
  it("Validate Header, paragraphs and image", async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        name: "Bart",
        lastName: "Simpson",
        dateOfBirth: "2000-04-01",
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
  });
});

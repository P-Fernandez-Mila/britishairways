import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe } from "node:test";
import Profile from "@/profile/page";

// Correctly mock a module
jest.mock("../../../app/apiCalls/getFrequentFlyerProfile.js", () => {
  return {
    _getFrequentFlyerProfile: jest.fn(() => {
      // Mock implementation or return value
    }),
  };
});
describe("Validate Layout", () => {
  // After each test clear the mock
  beforeEach(() => jest.clearAllMocks());
  it("Validate Header, paragraphs and image", async () => {
    render(<Profile />);
    const loader = document.querySelector('[aria-label="Loader"]');
    expect(loader).toBeInTheDocument();
  });
});

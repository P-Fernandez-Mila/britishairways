import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe } from "node:test";
import Profile from "@/profile/page";

describe("Validate Layout", () => {
  it("Validate Header, paragraphs and image", () => {
    render(<Profile />);
    const loader = document.querySelector('[aria-label="Loader"]');
    expect(loader).toBeInTheDocument();
  });
});

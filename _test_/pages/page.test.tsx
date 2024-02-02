import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe } from "node:test";
import Home from "@/page";

describe("Validate Layout", () => {
  it("Validate Header, paragraphs and image", () => {
    const headerText: string = "Welcome to British Airways";
    const paragraph1: string =
      "Hello, please come in, have a seat, make yourself comfortable while we finish preparing this app for you";
    const paragraph2: string =
      "⚠️ This site use mock data, so the information present here is not real";

    render(<Home />);
    const header: HTMLElement = screen.getByRole("heading");
    const actualParagraph1: HTMLElement = screen.getByText(paragraph1);
    const image = screen.getByAltText("Home Image");
    const actualParagraph2: HTMLElement = screen.getByText(paragraph2);
    expect(header).toHaveTextContent(headerText);
    expect(actualParagraph1).toHaveTextContent(paragraph1);
    expect(image).toBeInTheDocument();
    expect(actualParagraph2).toHaveTextContent(paragraph2);
  });
});

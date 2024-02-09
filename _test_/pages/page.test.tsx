import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe } from "node:test";
import Home from "@/page";
import {
  WELCOME_MESSAGE,
  COME_IN_MESSAGE,
  DISCLAIMER_HOME,
} from "@/utils/constants/strings";

describe("Validate Layout", () => {
  it("Validate Header, paragraphs and image", () => {
    const headerText: string = WELCOME_MESSAGE;
    const paragraph1: string = COME_IN_MESSAGE;
    const paragraph2: string = DISCLAIMER_HOME;

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

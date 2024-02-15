import Login from "@/login/page";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
    };
  },
}));

describe("Login Page", () => {
  it("Validate user login", async () => {
    render(<Login />);
    const userLabel = screen.getByLabelText("Username") as HTMLInputElement;
    expect(userLabel).toBeInTheDocument();
    const passwordLabel = screen.getByLabelText("Password") as HTMLInputElement;
    expect(passwordLabel).toBeInTheDocument();
    fireEvent.change(userLabel, { target: { value: "Bart" } });
    expect(userLabel.value).toBe("Bart");
  });
});

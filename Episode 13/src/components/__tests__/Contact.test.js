import { render, screen } from "@testing-library/react";
import Constant from "../Contact";
import "@testing-library/jest-dom";

test("should load contact us component", () => {
  render(<Constant />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("should load contact us button", () => {
  render(<Constant />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("should load contact us text", () => {
  render(<Constant />);
  const text = screen.getByText("Submit");
  expect(text).toBeInTheDocument();
});

test("should load contact us inout", () => {
  render(<Constant />);
  const input = screen.getAllByRole("textbox");
  expect(input.length).toBe(2);
});

// groupism testing will use describe block -> as use for example contact us 5 case we have to group like that 4 component 5 5 test case so we can group 4 components
describe("Contact us component", () => {
  test("should load contact us component", () => {
    render(<Constant />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("should load contact us button", () => {
    render(<Constant />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("should load contact us text", () => {
    render(<Constant />);
    const text = screen.getByText("Submit");
    expect(text).toBeInTheDocument();
  });

  test("should load contact us inout", () => {
    render(<Constant />);
    const input = screen.getAllByRole("textbox");
    expect(input.length).toBe(2);
  });
});

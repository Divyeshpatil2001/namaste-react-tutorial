import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should render header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //   const loginButton = screen.getByRole("button");
  // if having multiple button login , logout ,... then use name attribute also to filter our targeted button with name.
  const loginButton = screen.getByRole("button", { name: "login" });
  // if by role not work then by text but as role is preffered
  //   const loginButton = screen.getByText("login");
  expect(loginButton).toBeInTheDocument();
});

it("should render header component with cart items 0 ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //   const cartItems = screen.getByText("Cart (0 items)")
  //  also we can use regex also if text is dynamic (wherever cart items is there)
  const cartItems = screen.getByText(/Cart/);
  expect(cartItems).toBeInTheDocument();
});

it("should change login button to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", { name: "login" }); 
//   we did fire event for click execute
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button", { name: "logout" });
  expect(logoutButton).toBeInTheDocument();
});

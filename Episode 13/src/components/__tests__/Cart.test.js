import { act } from "react-dom/test-utils";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantMenu from "../RestaurantMenu";
import mock_data from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(mock_data);
    },
  });
});

it("should load restaurant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );
  const accordianHeader = screen.getByText("Chocolate Ice Creams (12)");
  fireEvent.click(accordianHeader);
  expect(screen.getAllByTestId("foodItems").length).toBe(12);
  const addBtn = screen.getAllByRole("button", { name: "Add +" });
  //   console.log(addBtn.length)
  expect(screen.getByText("Cart (0 items)")).toBeInTheDocument();
  fireEvent.click(addBtn[0]);
  expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();
  fireEvent.click(addBtn[1]);
  expect(screen.getByText("Cart (2 items)")).toBeInTheDocument();
  fireEvent.click(addBtn[2]);
  expect(screen.getByText("Cart (3 items)")).toBeInTheDocument();
  expect(screen.getAllByTestId("foodItems").length).toBe(15);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
  expect(screen.getAllByTestId("foodItems").length).toBe(12);
  console.log("bashbsjdh:::", screen.getAllByTestId("foodItems").length);
  expect(screen.getByText("Cart is Empty Add Items to the carts")).toBeInTheDocument();
});

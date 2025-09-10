import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import mock_data from "../mocks/mockRestListData.json";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(mock_data);
    },
  });
});

it("should search res list for pizza text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(20);

  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput,{target: { value: "pizza" }})   // e is not use here we can set manually 
  fireEvent.click(searchBtn);

//   screen should see 3 items
  const cardsAfterSearch = screen.getAllByTestId("resCard");
  expect(cardsAfterSearch.length).toBe(3);
});

// whenwver we use fetch async state update in component then for test case we have to wrap in the act() method
// act() - helps to make sure all the useEffect and other async code is executed before we do any assertion or testing
// import { act } from "react-dom/test-utils";

// for click - fireevent.click(element)
// 
// if dont know role or text so we can check using getbytestid just in element we have to add data-testid attribute
// like <input data-testid="searchInput" />
// then in test file we can use screen.getByTestId("searchInput")

it("should filter top rated restrauants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeFilter = screen.getAllByTestId("resCard");
  expect(cardsBeforeFilter.length).toBe(20);

  const topRatedBtn = screen.getByRole("button", { name: "Top Rated Restaurants" });
  fireEvent.click(topRatedBtn);

  const cardsafterFilter = screen.getAllByTestId("resCard");
  expect(cardsafterFilter.length).toBe(3);
  
});
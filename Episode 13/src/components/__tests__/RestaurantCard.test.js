import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import resCardData from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"

it("should render restaurant component with props data",() => {
    render(<RestaurantCard resData={resCardData} />);
    const name = screen.getByText("Pizza Hut");
    expect(name).toBeInTheDocument();
})
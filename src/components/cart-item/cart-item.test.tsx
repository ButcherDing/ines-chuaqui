import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CartItem from "./cart-item.component";
import { createStore, store } from "../../store/store";
import { Provider, useDispatch } from "react-redux";
import { renderWithProviders } from "../../test-utils/test-utils";

describe("cart-item", () => {
  const store = createStore();

  const mockCartItem = {
    quantity: 3,
    cartId: "xyz-id",
    printType: { size: "8x5", price: 999 },
    description: "",
    largeImageUrl: "",
    smallImageUrl: "",
    pieceId: "",
    title: "starry night",
    prints: [],
  };

  it("renders cartItem details, including title, size, quantity, and price", () => {
    renderWithProviders(<CartItem cartItem={mockCartItem} showImage />);

    const title = screen.getByText("starry night");
    const size = screen.getByText("8x5");
    const quantity = screen.getByText("3");
    const price = screen.getByText("999");

    //
    expect(title && size).toBeInTheDocument();
    expect(size).toBeInTheDocument();
    expect(quantity).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });

  // it("removes the item when removeButton is clicked", ()=> {
  //   const user = userEvent.setup()
  //   renderWithProviders(<CartItem cartItem={mockCartItem} showImage />);

  //   user.click
  // })
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { addCartItem, removeCartItem } from "../../store/cart/cart.slice";
import { useAppDispatch } from "../../store/hooks/hooks";
import { renderWithProviders } from "../../test-utils/test-utils";
import RemoveButton from "./remove-button";

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

describe("remove button", () => {
  jest.mock("../../test-utils/test-utils");

  it("removes an item when RemoveButton is clicked", async () => {
    const user = userEvent.setup();

    const { store } = renderWithProviders(
      <RemoveButton cartItem={mockCartItem} />
    );

    const removeButton = screen.getByRole("button");
    await user.click(removeButton);
    const newCartItems = store.getState().cart;

    expect(newCartItems).toHaveBeenCalledWith(removeCartItem);
  });
});

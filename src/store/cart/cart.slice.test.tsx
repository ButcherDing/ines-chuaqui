import { store } from "../store";

describe("CartItem redux state tests", () => {
  const cartItems = store.getState().cart.cartItems;

  it("should set cartItems to an empty array", () => {
    expect(cartItems).toEqual([]);
  });

  it("should add the specified item to the cartItems array", () => {});

  it("should set the quantity of the item to 1 if there is no such item already", () => {});

  it("should increment the item if it is already in cartItems array", () => {});
});

describe("Decrement", () => {
  const cartItems = store.getState().cart.cartItems;

  it("should set cartItems to an empty array", () => {
    expect(cartItems).toEqual([]);
  });

  it("should add the specified item to the cartItems array", () => {});

  it("should set the quantity of the item to 1 if there is no such item already", () => {});

  it("should increment the item if it is already in cartItems array", () => {});
});

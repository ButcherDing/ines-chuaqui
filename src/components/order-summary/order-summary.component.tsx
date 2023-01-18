import { selectCartItems, selectCartTotal } from "../../store/cart/cart.slice";
import { useAppSelector } from "../../store/hooks/hooks";

import {
  OrderHeaders,
  OrderHeader,
  ItemDetail,
  BoughtItem,
  SingleOrder,
} from "../order-history/order-history.styles";
import {
  ItemTotal,
  OrderSummaryContainer,
  OrderSummaryDetails,
} from "./order-summary.styles";

export const OrderSummary = () => {
  const cartItems = useAppSelector(selectCartItems);
  const cartTotal = useAppSelector(selectCartTotal);

  return (
    <OrderSummaryContainer>
      <h3>Order Summary</h3>

      {cartItems ? (
        <>
          <OrderHeaders>
            <OrderHeader>Item</OrderHeader>
            <OrderHeader>Size</OrderHeader>
            <OrderHeader>Quantity</OrderHeader>
            <OrderHeader>Price each</OrderHeader>
          </OrderHeaders>
          {/* separate this component out passing in boughtItem*/}
          <OrderSummaryDetails>
            {cartItems.map((cartItem) => (
              <BoughtItem>
                <ItemDetail>{cartItem.title} </ItemDetail>

                <ItemDetail>{cartItem.printType.size} </ItemDetail>
                <ItemDetail>{cartItem.quantity} </ItemDetail>

                <ItemDetail>{cartItem.printType.price} </ItemDetail>
              </BoughtItem>
            ))}
          </OrderSummaryDetails>
          <ItemTotal>Total: ${cartTotal}</ItemTotal>
        </>
      ) : (
        <></>
      )}
    </OrderSummaryContainer>
  );
};

export default OrderSummary;

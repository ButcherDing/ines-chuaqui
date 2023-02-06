import { useEffect, useState } from "react";
import { selectCartItems } from "../../store/cart/cart.slice";
import { useAppSelector } from "../../store/hooks/hooks";
import { fetchTotal } from "../../utils/stripe/stripe.utils";

import {
  OrderHeaders,
  OrderHeader,
  ItemDetail,
  BoughtItem,
} from "../order-history/order-history.styles";
import {
  ItemTotal,
  OrderSummaryContainer,
  OrderSummaryDetails,
} from "./order-summary.styles";

export const OrderSummary = () => {
  const cartItems = useAppSelector(selectCartItems);
  const [total, setTotal] = useState(-1);

  useEffect(() => {
    const getTotalFromServer = async () => {
      const total = await fetchTotal(cartItems);
      setTotal(total);
    };
    getTotalFromServer();
  }, [cartItems]);

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
          <ItemTotal>Total: ${total !== -1 && total}</ItemTotal>
        </>
      ) : (
        <></>
      )}
    </OrderSummaryContainer>
  );
};

export default OrderSummary;

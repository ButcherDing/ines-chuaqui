import { unixToDate } from "../../store/cart/cart.slice";
import { useAppSelector } from "../../store/hooks/hooks";

import { selectOrders } from "../../store/user/user-slice";
import {
  OrderHeaders,
  OrderHeader,
  ItemDetail,
  BoughtItem,
  SingleOrder,
  OrderHistoryContainer,
  OrderDateIdContainer,
} from "./order-history.styles";

export const OrderHistory = () => {
  const orders = useAppSelector(selectOrders);

  return (
    <OrderHistoryContainer>
      <h3>Order History</h3>

      {orders ? (
        orders.map((order) => (
          <>
            <OrderDateIdContainer>
              <div>
                {"      " +
                  unixToDate(order.paymentResult.paymentIntent?.created)}
              </div>
              <div>Order Id: ...{order.orderId.slice(-8)}</div>
            </OrderDateIdContainer>
            <OrderHeaders>
              {/* make dynamic - variables at top - could be reusable table */}
              <OrderHeader>Item</OrderHeader>
              <OrderHeader>Size</OrderHeader>
              <OrderHeader>Quantity</OrderHeader>
              <OrderHeader>Price each</OrderHeader>
            </OrderHeaders>
            {/* separate this component out passing in boughtItem*/}
            <SingleOrder>
              {order.orderedItems?.map((boughtItem) => (
                <BoughtItem>
                  <ItemDetail>{boughtItem.title} </ItemDetail>

                  <ItemDetail>{boughtItem.size} </ItemDetail>
                  <ItemDetail>{boughtItem.quantity} </ItemDetail>

                  <ItemDetail>{boughtItem.price} </ItemDetail>
                </BoughtItem>
              ))}
            </SingleOrder>
          </>
        ))
      ) : (
        <></>
      )}
    </OrderHistoryContainer>
  );
};

export default OrderHistory
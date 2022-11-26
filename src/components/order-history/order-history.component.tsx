import { FC } from "react";
import { useSelector } from "react-redux";
import { unixToDate } from "../../store/cart/cart.slice";
import { useAppSelector } from "../../store/hooks/hooks";

import { FormattedOrderItem, Order } from "../../store/user/user-slice";
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
  const orders = useAppSelector((state) => state.user.currentUser?.orders);

  return (
    <OrderHistoryContainer>
      <h3>Order History</h3>

      {orders ? (
        orders.map((order) => (
          <>
            <OrderDateIdContainer>
              <div>
                Ordered:
                {"      " +
                  unixToDate(order.paymentResult.paymentIntent?.created)}
              </div>
              <div>Order Id: ...{order.orderId.slice(-8)}</div>
            </OrderDateIdContainer>
            <OrderHeaders>
              <OrderHeader>Item</OrderHeader>
              <OrderHeader>Size</OrderHeader>
              <OrderHeader>Quantity</OrderHeader>
              <OrderHeader>Price each</OrderHeader>
              {/* <span>Order Id</span> */}
              {/* <span>Date Ordered</span> */}
            </OrderHeaders>
            <SingleOrder>
              {order.formattedBoughtItems.map((boughtItem) => (
                <BoughtItem>
                  <ItemDetail>{boughtItem.title} </ItemDetail>

                  <ItemDetail>{boughtItem.size} </ItemDetail>
                  <ItemDetail>{boughtItem.quantity} </ItemDetail>

                  <ItemDetail>{boughtItem.price} </ItemDetail>

                  {/* <span>{boughtItem.orderId}</span> */}
                  {/* <span>{boughtItem.date}</span> */}
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

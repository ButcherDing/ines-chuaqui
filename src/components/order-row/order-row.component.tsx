import { FC } from "react";
import { Order } from "../../store/user/user-slice";

type OrderRowProps = Order;

// export const OrderRow: FC<OrderRowProps> = ({ order }: Order) => {
//   // return (
//   //   <OrderItemContainer>
//   //     <OrderImageContainer>
//   //       <img src={smallImageUrl} alt={title}></img>
//   //     </OrderImageContainer>
//   //     <OrderItemDetail>{title}</OrderItemDetail>
//   //     <OrderItemDetail>{buyType.size}</OrderItemDetail>
//   //     <Quantity>
//   //       <QuantityButton cartItem={cartItem} />
//   //     </Quantity>
//   //     <OrderItemDetail>{buyType.price}</OrderItemDetail>
//   //   </OrderItemContainer>
//   // );
// };

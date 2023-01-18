import styled from "styled-components";
import { ItemDetail, SingleOrder } from "../order-history/order-history.styles";

export const OrderSummaryContainer = styled.div`
  width: 50%;
`;

export const Order = styled.div``;

export const ItemTotal = styled(ItemDetail)`
  font-size: 1.8rem;
`;

export const OrderSummaryDetails = styled(SingleOrder)`
  margin-bottom: 1rem;
`;

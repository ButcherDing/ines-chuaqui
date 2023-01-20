import styled from "styled-components";
import { ItemDetail, SingleOrder } from "../order-history/order-history.styles";

export const OrderSummaryContainer = styled.div`
  margin-top: 2rem;
  min-width: 29.2rem;
  width: 50%;
`;

export const ItemTotal = styled(ItemDetail)`
  font-size: 1.8rem;
`;

export const OrderSummaryDetails = styled(SingleOrder)`
  margin-bottom: 1rem;
`;

import styled from "styled-components";
import { ItemDetail, SingleOrder } from "../order-history/order-history.styles";

export const OrderSummaryContainer = styled.div`
  width: 100%;
  max-width: 60rem;
`;

export const ItemTotal = styled(ItemDetail)`
  font-size: 3rem;
`;

export const OrderSummaryDetails = styled(SingleOrder)`
  margin-bottom: 1rem;

  div {
    border-bottom: grey 1px;
  }
`;

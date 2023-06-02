import styled from "styled-components";
import { fadeInFromTop, primaryShade } from "../../general.styles";

export const OrderHistoryContainer = styled.div`
  width: 100%;
`;

export const OrderDateIdContainer = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  gap: 1.6rem;
  display: flex;
  justify-content: space-between;
`;

export const OrderHeaders = styled.div`
  width: 100%;
  display: flex;
  text-align: center;
  border-bottom: 1px solid ${primaryShade};
  margin: 1rem 0rem;
`;
export const OrderHeader = styled.div`
  flex: 1;
  font-size: 1.6rem;
  text-align: center;
  &:last-child {
    text-align: right;
  }
  &:first-child {
    text-align: left;
  }
`;

export const SingleOrder = styled.div`
  border-bottom: 1px solid ${primaryShade};
  margin-bottom: 4.8rem;
`;

export const BoughtItem = styled.div`
  display: flex;
  font-size: 1.4rem;
`;

export const ItemDetail = styled(OrderHeader)`
  text-align: center;
  &:last-child {
  }
`;

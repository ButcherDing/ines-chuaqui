import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const CheckoutImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const CheckoutItemDetail = styled.span`
  width: 23%;
`;
// Not ideal - I want to style quantity button directly instead of having to stick it in a div like a divhead.
export const Quantity = styled.div`
  width: 23%;
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;

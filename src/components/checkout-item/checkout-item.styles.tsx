import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 1.5rem 0rem;
  font-size: 1.8rem;
  align-items: center;
  justify-items: center;
  /* gap: 1.5rem; */
`;

export const CheckoutImageContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  /* padding-right: 15px; */

  img {
    min-width: 50%;
    width: 90%;
    height: 100%;
  }
`;

export const CheckoutItemDetail = styled.span`
  /* width: 16.66%; */
`;
// Not ideal - I want to style quantity button directly instead of having to stick it in a div like a divhead.
export const Quantity = styled.div`
  /* width: 16.66%; */
`;

export const RemoveButton = styled.span`
  /* padding-left: 5rem; */
  cursor: pointer;
`;

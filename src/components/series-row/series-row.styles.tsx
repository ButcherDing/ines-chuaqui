import styled from "styled-components";

export const ShopRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  justify-content: space-around;
  margin-bottom: 5rem;
  gap: 2.4rem;
`;

export const ShopRowItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 15rem;
`;

export const ShopRowImage = styled.img`
  max-width: 100%;
  /* height: 100%; */
  margin-bottom: 2rem;
`;

import styled from "styled-components";

export const ShopRow = styled.div`
  display: flex;

  width: 95%;
  justify-content: space-around;
  /* align-items: flex-end; */
  /* justify-items: space-around; */
`;

export const ShopRowItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 15%;
`;

export const ButtonContainer = styled.div`
  max-width: 75%;
`;

export const ShopRowItem = styled.img`
  max-width: 100%;
  /* height: 100%; */
  margin-bottom: 1rem;
`;

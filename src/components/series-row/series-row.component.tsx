import { FC } from "react";
import { Series } from "../../store/gallery/gallery.slice";
import { useAppDispatch } from "../../store/hooks/hooks";

import Modal from "../../components/modal/modal.component";

import {
  ShopRow,
  ShopRowItem,
  ShopRowItemContainer,
  ButtonContainer,
} from "./series-row.styles";

export interface SeriesRowProps {
  readonly series: Series;
  className?: string;
  key: string;
}

export const SeriesRow: FC<SeriesRowProps> = ({ series }) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <h3>{series.title}</h3>
      <ShopRow>
        {series.pieces.map((piece) => (
          <ShopRowItemContainer key={"shop_row_key" + piece.title}>
            <ShopRowItem src={piece.smallImageUrl} alt={piece.title} />
            <ButtonContainer>
              <Modal piece={piece} />
            </ButtonContainer>
          </ShopRowItemContainer>
        ))}
      </ShopRow>
    </>
  );
};

export default SeriesRow;

///// OLD ADD TO CART BUTTON
// const addPrintHandler = (piece: Piece) => {
//   const cartItemToAdd = { ...piece, quantity: 1 };
//   return dispatch(setCartItems(cartItemToAdd));
// };

/* <Button onClick={() => addPrintHandler(piece)}>
                Order Print
              </Button> */

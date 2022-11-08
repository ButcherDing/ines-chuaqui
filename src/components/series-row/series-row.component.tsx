import { FC, Fragment } from "react";
import { Piece, Series } from "../../store/gallery/gallery.slice";
import { useAppDispatch } from "../../store/hooks/hooks";

import { CartItem, setCartItems } from "../../store/cart/cart.slice";

import Button from "../button/button.component";

import {
  ShopRow,
  ShopRowItem,
  ShopRowItemContainer,
} from "./series-row.styles";

export interface SeriesRowProps {
  readonly series: Series;
  className?: string;
  key: string;
}

export const SeriesRow: FC<SeriesRowProps> = ({ series }) => {
  const dispatch = useAppDispatch();

  const addPrintHandler = (piece: Piece) => {
    const cartItemToAdd = { ...piece, quantity: 1 };
    return dispatch(setCartItems(cartItemToAdd));
  };

  return (
    <>
      <h3>{series.title}</h3>
      <ShopRow>
        {series.pieces.map((piece) => (
          <ShopRowItemContainer key={"shop_row_key" + piece.title}>
            <ShopRowItem src={piece.smallImageUrl} alt={piece.title} />
            <Button onClick={() => addPrintHandler(piece)}>Order Print</Button>
          </ShopRowItemContainer>
        ))}
      </ShopRow>
    </>
  );
};

export default SeriesRow;

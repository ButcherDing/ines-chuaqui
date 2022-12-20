import { FC, useState } from "react";
import { Series } from "../../store/gallery/gallery.slice";

import ModalProductButton from "../modal-button/modal-button.component";

import {
  ShopRow,
  ShopRowImage,
  ShopRowItemContainer,
} from "./series-row.styles";

export interface SeriesRowProps {
  readonly series: Series;
  className?: string;
  key: string;
}

export const SeriesRow: FC<SeriesRowProps> = ({ series }) => {
  return (
    <>
      <h3>{series.title}</h3>
      <ShopRow>
        {series.pieces.map((piece) => (
          <ShopRowItemContainer key={"shop_row_key" + piece.title}>
            <ShopRowImage src={piece.smallImageUrl} alt={piece.title} />
            <ModalProductButton piece={piece} />
          </ShopRowItemContainer>
        ))}
      </ShopRow>
    </>
  );
};

export default SeriesRow;

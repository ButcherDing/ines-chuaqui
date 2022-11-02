import { FC, Fragment } from "react";
import { Series } from "../../store/gallery/gallery.slice";

import Button from "../button/button.component";

import {
  ShopRow,
  ShopRowItem,
  ShopRowItemContainer,
} from "./shop-series.styles";

export interface ShopSeriesProps {
  readonly series: Series;
  className?: string;
}

export const ShopSeries: FC<ShopSeriesProps> = ({ series }) => {
  return (
    <>
      <h3>{series.title}</h3>
      <ShopRow>
        {series.pieces.map((piece) => (
          <ShopRowItemContainer>
            <ShopRowItem src={piece.smUrl} alt={piece.title} key={piece.id} />
            <Button>Order Print</Button>
          </ShopRowItemContainer>
        ))}
      </ShopRow>
    </>
  );
};

export default ShopSeries;

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
  key: string;
}

export const ShopSeries: FC<ShopSeriesProps> = ({ series }) => {
  return (
    <>
      <h3>{series.title}</h3>
      <ShopRow>
        {series.pieces.map((piece) => (
          <ShopRowItemContainer key={"shop_row_key" + piece.title}>
            <ShopRowItem src={piece.smallImageUrl} alt={piece.title} />
            <Button>Order Print</Button>
          </ShopRowItemContainer>
        ))}
      </ShopRow>
    </>
  );
};

export default ShopSeries;

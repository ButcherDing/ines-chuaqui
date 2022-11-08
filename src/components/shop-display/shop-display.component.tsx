import { useAppSelector } from "../../store/hooks/hooks";
import { ShopDisplayContainer } from "./shop-display.styles";
import ShopSeries from "../series-row/series-row.component";

export const ShopDisplay = () => {
  const seriesArr = useAppSelector((state) => state.gallery.seriesData).map(
    (series) => series
  );

  return (
    <ShopDisplayContainer>
      {seriesArr.map((series) => (
        <ShopSeries series={series} key={"shop_series" + series.title} />
      ))}
    </ShopDisplayContainer>
  );
};

export default ShopDisplay;

// DRAFT
/* 


*/

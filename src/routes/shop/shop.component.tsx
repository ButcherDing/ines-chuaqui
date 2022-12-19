import { Suspense, lazy } from "react";

import Spinner from "../../components/spinner/spinner.component";
import ShopContainer from "./shop.styles";

const ShopDisplay = lazy(
  () => import("../../components/shop-display/shop-display.component")
);

export const Shop = () => {
  return (
    <ShopContainer>
      <h1>Order Prints</h1>
      <Suspense fallback={<Spinner />}>
        <ShopDisplay />
      </Suspense>
    </ShopContainer>
  );
};

export default Shop;

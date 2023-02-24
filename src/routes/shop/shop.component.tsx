import { Suspense, lazy } from "react";

import Spinner from "../../components/spinner/spinner.component";
import ShopContainer, { WarningMessage } from "./shop.styles";

const ShopDisplay = lazy(
  () => import("../../components/shop-display/shop-display.component")
);

export const Shop = () => {
  return (
    <ShopContainer>
      {/* <WarningMessage>
        <em>
          *** preview - for demonstration purposes only - please contact the
          artist to order prints or originals ***
        </em>
      </WarningMessage> */}
      <h1>Order Prints</h1>
      <Suspense fallback={<Spinner />}>
        <ShopDisplay />
      </Suspense>
    </ShopContainer>
  );
};

export default Shop;

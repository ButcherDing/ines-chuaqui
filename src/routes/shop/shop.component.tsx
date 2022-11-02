import { Fragment, useEffect, Suspense, lazy } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";

import Spinner from "../../components/spinner/spinner.component";
// import { getImagesAsync } from "../../store/gallery/gallery.slice";

const ShopDisplay = lazy(
  () => import("../../components/shop-display/shop-display.component")
);

export const Shop = () => {
  // const dispatch = useAppDispatch();
  // might be time to learn about custom selectors (to select our urls)
  // const isLoading = useAppSelector((state) => state.gallery.isLoading);

  // do a useEffect that generates a number of imgs from the url

  return (
    <Fragment>
      <h1>Print Shop</h1>
      <Suspense fallback={<Spinner />}>
        {/* <Image url={storeUrls[0]}></Image> */}
        <ShopDisplay />
      </Suspense>
    </Fragment>
  );
};

export default Shop;

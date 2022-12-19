import React, { useEffect, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import GlobalStyle from "./general.styles";
import ContactSuccess from "./routes/contact-success/contact-success.component";

import Spinner from "./components/spinner/spinner.component";

import { checkUserSessionAsync } from "./store/user/user-slice";

import { getSeriesDataAsync } from "./store/gallery/gallery.slice";

import { useAppDispatch } from "./store/hooks/hooks";
import Navigation from "./routes/navigation/navigation.component";

const Home = lazy(() => import("./routes/home/home.component"));
const Gallery = lazy(() => import("./routes/gallery/gallery.component"));
const Shop = lazy(() => import("./routes/shop/shop.component"));
const Authentication = lazy(
  () => import("./routes/authentication/authentication.component")
);
const Checkout = lazy(() => import("./routes/checkout/checkout.component"));
const Contact = lazy(() => import("./routes/contact/contact.component"));

function App() {
  const dispatch = useAppDispatch();

  // const storeUrls = useAppSelector((state) => state.gallery.storeUrls);

  useEffect(() => {
    dispatch(checkUserSessionAsync());
    dispatch(getSeriesDataAsync());
  }, []);

  // useEffect(() => {
  //   dispatch(getFirestoreUrlsAsync());
  // }, [seriesData]);

  return (
    <>
      <GlobalStyle />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Navigation />}>
            <Route path="gallery" element={<Gallery />} />
            <Route path="shop" element={<Shop />} />
            <Route path="contact" element={<Contact />} />
            <Route path="contact/success" element={<ContactSuccess />} />
            <Route path="auth" element={<Authentication />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

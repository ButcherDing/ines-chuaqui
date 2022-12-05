import React, { useEffect, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import { Fragment } from "react";

import GlobalStyle from "./general.styles";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Gallery from "./routes/gallery/gallery.component";
import Shop from "./routes/shop/shop.component";
import Authentication from "./routes/authentication/authentication.component";
import Checkout from "./routes/checkout/checkout.component";
import Contact from "./routes/contact/contact.component";

import { checkUserSession } from "./store/user/user-slice";

import {
  getSeriesDataAsync,
  // getFirestoreUrlsAsync,
} from "./store/gallery/gallery.slice";

import { useAppDispatch, useAppSelector } from "./store/hooks/hooks";

import ContactSuccess from "./routes/contact-success/contact-success.component";

function App() {
  const dispatch = useAppDispatch();

  // const storeUrls = useAppSelector((state) => state.gallery.storeUrls);

  useEffect(() => {
    dispatch(checkUserSession());
    dispatch(getSeriesDataAsync());
  }, []);

  // useEffect(() => {
  //   dispatch(getFirestoreUrlsAsync());
  // }, [seriesData]);

  return (
    <Fragment>
      <GlobalStyle />
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
    </Fragment>
  );
}

export default App;

import React, { useEffect, lazy, Suspense, startTransition } from "react";
import { useAppDispatch } from "./store/hooks/hooks";
import {
  BrowserRouter,
  Route,
  Routes,
  createRoutesFromElements,
  Outlet,
} from "react-router-dom";

import GlobalStyle from "./general.styles";
import ContactSuccess from "./routes/contact-success/contact-success.component";
import Spinner from "./components/spinner/spinner.component";

import { checkUserSessionAsync } from "./store/user/user-slice";
import { getSeriesDataAsync } from "./store/gallery/gallery.slice";
import CheckoutSuccess from "./routes/checkout-success/checkout-success.component";

import Stripe from "stripe";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkUserSessionAsync());

    dispatch(getSeriesDataAsync());
  }, []);

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <GlobalStyle />
        <Outlet />
      </Suspense>
    </>
  );
}

export default App;

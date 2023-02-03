import React, { lazy } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";

import App from "./App";

import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/lib/integration/react";
import Spinner from "./components/spinner/spinner.component";

import CheckoutSuccess from "./routes/checkout-success/checkout-success.component";
import ContactSuccess from "./routes/contact-success/contact-success.component";
import ErrorPage from "./routes/error-page/error-page.component";

const Home = lazy(() => import("./routes/home/home.component"));
const Gallery = lazy(() => import("./routes/gallery/gallery.component"));
const Shop = lazy(() => import("./routes/shop/shop.component"));
const Authentication = lazy(
  () => import("./routes/authentication/authentication.component")
);
const Navigation = lazy(
  () => import("./routes/navigation/navigation.component")
);
const Checkout = lazy(() => import("./routes/checkout/checkout.component"));
const Payment = lazy(() => import("./routes/payment/payment.component"));
const Contact = lazy(() => import("./routes/contact/contact.component"));

const container = document.getElementById("root")!;
const root = createRoot(container);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />} element={<App />}>
      <Route index element={<Home />} />
      <Route path="/" element={<Navigation />}>
        <Route path="gallery" element={<Gallery />} />
        <Route path="shop" element={<Shop />} />
        <Route path="contact" element={<Contact />} />
        <Route path="contact/success" element={<ContactSuccess />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />

        <Route path="checkout/payment" element={<Payment />} />
        <Route
          path="checkout/success/*"
          errorElement={<ErrorPage />}
          element={<CheckoutSuccess />}
        />
      </Route>
    </Route>
  )
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<Spinner />}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

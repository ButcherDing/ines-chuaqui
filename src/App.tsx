import React from "react";
import { Route, Routes } from "react-router-dom";
import { Fragment } from "react";


import GlobalStyle from "./general.styles";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Gallery from "./routes/gallery/gallery.component";
import Authentication from "./components/auth/authentication.component";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="auth" element={<Authentication />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;

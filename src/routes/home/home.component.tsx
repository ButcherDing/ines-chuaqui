import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import Hero from "../../components/hero/hero.component";
import { HomeContainer } from "./home.styles";

// contains our sections on the main page

const Home = () => {
  return (
    <Fragment>
      {/* <Outlet /> */}
      <HomeContainer>
        <Hero />
        {/* about the artist */}
        {/* gallery */}
        {/* stuff she's done */}
        {/* get in touch */}
        {/* buy stuff */}
      </HomeContainer>
    </Fragment>
  );
};

export default Home;

import { Fragment } from "react";

import Hero from "../../components/hero/hero.component";
import { HomeContainer } from "./home.styles";

// contains our sections on the main page

const Home = () => {
  return (
    <Fragment>
      <HomeContainer>
        <Hero />
      </HomeContainer>
    </Fragment>
  );
};

export default Home;

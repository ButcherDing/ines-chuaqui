import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import Hero from "../../components/hero/hero.component";
import { HomeContainer, Name } from "./home.styles";

const Home = () => {
  return (
    <Fragment>
      <Outlet />
      <HomeContainer>
        <Name>Ines Chuaqui</Name>
        <Hero />
      </HomeContainer>
    </Fragment>
  );
};

export default Home;

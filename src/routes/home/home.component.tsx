import Hero from "../../components/hero/hero.component";
import { HomeContainer } from "./home.styles";

// contains our sections on the main page

const Home = () => {
  return (
    <HomeContainer>
      <Hero />
    </HomeContainer>
  );
};

export default Home;

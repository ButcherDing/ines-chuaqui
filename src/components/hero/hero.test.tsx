import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Hero from "./hero.component";

const MockHero = () => {
  return (
    <BrowserRouter>
      <Hero />
    </BrowserRouter>
  );
};

it("should render the artist's name", () => {
  render(<MockHero />);
  const headerElement = screen.getByText("Ines Chuaqui");
  expect(headerElement).toBeInTheDocument();
});

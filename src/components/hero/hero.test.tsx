import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter, Link } from "react-router-dom";
import { LeafButton } from "../button/button.styles";
import Hero from "./hero.component";
import userEvent from "@testing-library/user-event";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Gallery from "../../routes/gallery/gallery.component";

// THIS 👇👇👇
// test("Clicking sign-in button pushes '/signin' to history", () => {
//   const { history } = render(<NavBar />, { preloadedState: { user: null } });

//   const signInButton = screen.getByRole("button", { name: /sign in/i });
//   fireEvent.click(signInButton);

//   expect(history.location.pathname).toBe("/signin");
// });

const MockHero = () => {
  return (
    <BrowserRouter>
      <Hero />
    </BrowserRouter>
  );
};

const MockLinkButton = () => {
  return (
    <Link to="/gallery">
      <LeafButton>Explore Work</LeafButton>
    </Link>
  );
};

const mockNavFn = jest.fn(() => {});

const mockHeroImageStyles = describe("Hero", () => {
  it("should render the artist's name", () => {
    render(<MockHero />);
    const headerElement = screen.getByText(/Ines Chuaqui/i);
    expect(headerElement).toBeInTheDocument();
  });
  it("should render artist description", () => {
    render(<MockHero />);

    const paragraphElement = screen.getByRole("paragraph");
    expect(paragraphElement).toBeInTheDocument();
  });
  // it("should render hero image", () => {
  //   render(<MockHero />);

  //   const heroImageElement = screen.getByTestId("hero-image-div");
  //   expect(heroImageElement).toHaveStyle("background-image: bla");
  // });

  it("should render link button", () => {
    render(<MockHero />);

    const linkElement = screen.getByRole("button", { name: /Explore/i });
    expect(linkElement).toBeInTheDocument();
  });

  it("should take us to gallery page when we click the button", async () => {
    render(<MockHero />);

    const user = userEvent.setup();
    const linkElement = screen.getByRole("button", { name: /Explore/i });
    await user.click(linkElement);
    const galleryElement = screen.queryByText(/gallery/i);
    expect(galleryElement).toBeInTheDocument();
  });
});

describe("link button", () => {});

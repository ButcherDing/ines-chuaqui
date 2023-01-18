import { render, screen, fireEvent } from "@testing-library/react";
import { store } from "../../store/store";
import { Provider } from "react-redux";
import SignInForm from "./sign-in-form.component";

const MockSignInForm = () => {
  return (
    <Provider store={store}>
      <SignInForm />
    </Provider>
  );
};

it("should render the title", async () => {
  render(<MockSignInForm />);
  const headingElement = screen.getByRole("heading", { name: "Sign in" });
  expect(headingElement).toBeInTheDocument;
});

describe("SignInForm", () => {
  it("should render the same text", async () => {
    render(<MockSignInForm />);
    const inputElement: HTMLInputElement = screen.getByLabelText("Email");

    fireEvent.change(inputElement, { target: { value: "joe@email.com" } });
    expect(inputElement.value).toBe("joe@email.com");
  });
});

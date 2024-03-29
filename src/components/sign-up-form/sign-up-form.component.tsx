import { useState, FormEvent, ChangeEvent } from "react";

import FormInput from "../form-input/form-input.component";

import {} from "../../utils/firebase/firebase.utils";

import { SignUpContainer } from "./sign-up-form.styles";

import { signUpWithEmailPassAsync } from "../../store/user/user-slice";
import { LeafButton } from "../button/button.styles";
import { ButtonsContainer } from "../sign-in-form/sign-in-form.styles";
import { useAppDispatch } from "../../store/hooks/hooks";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  // local state
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  // global state
  const dispatch = useAppDispatch();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      dispatch(signUpWithEmailPassAsync(formFields));
    } catch (error) {
      console.error("user sign up failed", error);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <h2>New account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <ButtonsContainer>
          <LeafButton type="submit">Sign Up</LeafButton>
        </ButtonsContainer>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;

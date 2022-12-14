import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { useAppDispatch } from "../../store/hooks/hooks";
import { useAppSelector } from "../../store/hooks/hooks";

import { SignInContainer, ButtonsContainer } from "./sign-in-form.styles";
import {
  signInGooglePopupAsync,
  signInEmailPassAsync,
} from "../../store/user/user-slice";
import { GoogleLeafButton, LeafButton } from "../button/button.styles";
//TODO: TYPESCRIPT
const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  // local state (useState)
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  // global state (redux toolkit)
  const dispatch = useAppDispatch();

  // Action Handlers
  const signInWithGoogle = () => {
    dispatch(signInGooglePopupAsync());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await dispatch(signInEmailPassAsync(formFields));
    resetFormFields();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignInContainer>
      <h2>Sign in</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <ButtonsContainer>
          <LeafButton type="submit">Sign in</LeafButton>
          <GoogleLeafButton
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={signInWithGoogle}
          >
            Google Sign In
          </GoogleLeafButton>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;

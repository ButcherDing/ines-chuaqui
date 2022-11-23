import { Fragment } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { signOut } from "../../store/user/user-slice";

import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import Button from "../../components/button/button.component";
import { AuthenticationContainer, OrderHistory } from "./authentication.styles";
import { SignedInDisplay } from "../../components/auth-signedin-display/auth-signedin-display.component";

const Authentication = () => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.user.currentUser);

  const signOutHandler = () => {
    dispatch(signOut());
  };
  return (
    <AuthenticationContainer>
      {currentUser ? (
        <SignedInDisplay />
      ) : (
        <Fragment>
          <SignInForm />
          <SignUpForm />
        </Fragment>
      )}
    </AuthenticationContainer>
  );
};

export default Authentication;

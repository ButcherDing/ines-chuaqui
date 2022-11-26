import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { signOut } from "../../store/user/user-slice";

import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import Button from "../../components/button/button.component";
import {
  AuthenticationContainer,
  NotSignedIn,
  OrderHistory,
} from "./authentication.styles";
import { UserDashboard } from "../../components/user-dashboard/user-dashboard.component";

const Authentication = () => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.user.currentUser);

  const signOutHandler = () => {
    dispatch(signOut());
  };
  return (
    <AuthenticationContainer>
      {currentUser ? (
        <UserDashboard />
      ) : (
        <NotSignedIn>
          <SignInForm />
          <SignUpForm />
        </NotSignedIn>
      )}
    </AuthenticationContainer>
  );
};

export default Authentication;

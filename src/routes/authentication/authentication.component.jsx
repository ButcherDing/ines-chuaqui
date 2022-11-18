import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import { AuthenticationContainer, OrderHistory } from "./authentication.styles";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { signOut } from "../../store/user/user-slice";
import Button from "../../components/button/button.component";

const Authentication = () => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.user.currentUser);

  const signOutHandler = () => {
    dispatch(signOut());
  };
  return (
    <AuthenticationContainer>
      {currentUser ? (
        <div>
          <h4>Welcome back, {currentUser.displayName}</h4>
          <OrderHistory>
            <span>Item</span>
            <span>Date Ordered</span>
            <span>Price</span>
            <span></span>
          </OrderHistory>
          <Button onClick={signOutHandler}>Sign Out</Button>
        </div>
      ) : (
        <>
          <SignInForm /> <SignUpForm />
        </>
      )}
    </AuthenticationContainer>
  );
};

export default Authentication;

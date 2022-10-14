import { useAppDispatch } from "../../store/hooks/hooks";
import { AuthContainer } from "./authentication.styles";

// import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
// import SignInForm from "../../components/sign-in-form/sign-in-form.component";

const Authentication = () => {
  // useAppDispatch(signInWithGoogle());

  const signInHandler = () => {};

  return (
    <AuthContainer>
      <div onClick={signInHandler}></div>
      {/* <SignInForm />
      <SignUpForm /> */}
    </AuthContainer>
  );
};

export default Authentication;

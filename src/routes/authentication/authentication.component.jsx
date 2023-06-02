import { useAppSelector } from "../../store/hooks/hooks";
import { selectCurrentUser } from "../../store/user/user-slice";

import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import { UserDashboard } from "../../components/user-dashboard/user-dashboard.component";
import { AuthenticationContainer, NotSignedIn } from "./authentication.styles";

const Authentication = () => {
  const {currentUser, error} = useAppSelector((state) => state.user);


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

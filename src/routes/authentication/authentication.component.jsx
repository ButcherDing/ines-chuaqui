import { useAppSelector } from "../../store/hooks/hooks";
import { selectCurrentUser } from "../../store/user/user-slice";

import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import { AuthenticationContainer, NotSignedIn } from "./authentication.styles";
import { UserDashboard } from "../../components/user-dashboard/user-dashboard.component";

const Authentication = () => {
  const currentUser = useAppSelector(selectCurrentUser);

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

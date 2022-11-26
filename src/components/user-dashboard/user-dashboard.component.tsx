import { useState } from "react";
import { useSelector } from "react-redux";

import { signOut, UserData } from "../../store/user/user-slice";

import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";

import { OrderHistory } from "../order-history/order-history.component";

import {
  DashboardContainer,
  ButtonCol,
  HeaderContainer,
  Underlined,
} from "./user-dashboard.styles";

import { LeafButton } from "../button/button.styles";

import UserSettings from "../user-settings/user-settings.component";

// TODO 'no history to display'
export const UserDashboard = () => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(
    (state) => state.user.currentUser as UserData
  );
  const [showHistory, setShowHistory] = useState(false);
  const [showUserSettings, setShowUserSettings] = useState(false);

  const signOutHandler = () => {
    dispatch(signOut());
  };

  const showHistoryToggler = () => setShowHistory(!showHistory);
  const showUserSettingsToggler = () => setShowUserSettings(!showUserSettings);

  return (
    <DashboardContainer>
      <HeaderContainer>
        <h2>
          Welcome back, <Underlined>{currentUser.displayName}</Underlined>.
        </h2>
        <h4>{currentUser.email}</h4>
        <LeafButton onClick={signOutHandler}>Sign Out</LeafButton>
      </HeaderContainer>
      <ButtonCol>
        <LeafButton onClick={showUserSettingsToggler}>
          {showUserSettings ? `Hide Settings` : `Change Account Settings`}
        </LeafButton>
        {showUserSettings && <UserSettings />}

        <LeafButton onClick={showHistoryToggler}>
          {showHistory ? `Hide History` : `Show Order History`}
        </LeafButton>
        {showHistory && <OrderHistory />}
      </ButtonCol>
    </DashboardContainer>
  );
};

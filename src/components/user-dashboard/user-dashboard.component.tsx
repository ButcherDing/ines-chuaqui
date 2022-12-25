import { useState } from "react";

import { signOutAsync, UserData } from "../../store/user/user-slice";

import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";

import { OrderHistory } from "../order-history/order-history.component";

import {
  DashboardContainer,
  ButtonCol,
  HeaderContainer,
  Underlined,
  Caret,
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

  const signOutAsyncHandler = () => {
    dispatch(signOutAsync());
  };

  const showHistoryToggler = () => setShowHistory(!showHistory);
  const showUserSettingsToggler = () => setShowUserSettings(!showUserSettings);

  return (
    <DashboardContainer>
      <HeaderContainer>
        <h2>
          Hi, <Underlined>{currentUser.displayName}</Underlined>.
        </h2>
        <h5>{currentUser.email}</h5>
        <LeafButton onClick={signOutAsyncHandler}>Sign Out</LeafButton>
      </HeaderContainer>
      <ButtonCol>
        <LeafButton onClick={showUserSettingsToggler}>
          Account Settings
          <Caret className={showUserSettings ? "rotate" : ""} />
        </LeafButton>
        {showUserSettings && <UserSettings currentUser={currentUser} />}

        <LeafButton onClick={showHistoryToggler}>
          Order History
          <Caret className={showHistory ? "rotate" : ""} />
        </LeafButton>
        {showHistory && <OrderHistory />}
      </ButtonCol>
    </DashboardContainer>
  );
};

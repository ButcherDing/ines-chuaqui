import { useState } from "react";

import { signOutAsync, UserData } from "../../store/user/user-slice";

import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";

import { OrderHistory } from "../order-history/order-history.component";

import {
  DashboardContainer,
  HeaderContainer,
  Underlined,
  Caret,
  SettingsCol,
  SettingsDropdownButton,
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
      <SettingsCol>
        <SettingsDropdownButton onClick={showUserSettingsToggler}>
          Account Settings
          <Caret className={showUserSettings ? "rotate" : ""} />
        </SettingsDropdownButton>
        {showUserSettings && <UserSettings currentUser={currentUser} />}

        <SettingsDropdownButton onClick={showHistoryToggler}>
          Order History
          <Caret className={showHistory ? "rotate" : ""} />
        </SettingsDropdownButton>
        {showHistory && <OrderHistory />}
      </SettingsCol>
    </DashboardContainer>
  );
};

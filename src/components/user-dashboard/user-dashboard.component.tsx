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
  UserHeader,
  DashboardSignOutButton,
} from "./user-dashboard.styles";
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
        <UserHeader>
          Hi, <Underlined>{currentUser.displayName}</Underlined>.
        </UserHeader>
        <span>✉ {currentUser.email}</span>
      </HeaderContainer>
      <SettingsCol>
        <SettingsDropdownButton onClick={showHistoryToggler}>
          Order History
          <Caret className={showHistory ? "rotate" : ""} />
        </SettingsDropdownButton>
        {showHistory && <OrderHistory />}

        <SettingsDropdownButton onClick={showUserSettingsToggler}>
          Account Settings
          <Caret className={showUserSettings ? "rotate" : ""} />
        </SettingsDropdownButton>
        {showUserSettings && <UserSettings currentUser={currentUser} />}
      </SettingsCol>
      <DashboardSignOutButton onClick={signOutAsyncHandler}>
        Sign Out
      </DashboardSignOutButton>
    </DashboardContainer>
  );
};

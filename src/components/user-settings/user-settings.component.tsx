import { useState } from "react";
import { useAppDispatch } from "../../store/hooks/hooks";

import {
  changeDisplayName,
  changeEmail,
  changePassword,
  deleteUser,
} from "../../store/user/user-slice";
import { BlackLeafButton, LeafButton } from "../button/button.styles";
import {
  UserSettingsContainer,
  DashboardFormInput,
} from "./user-settings.styles";

const defaultFormFields = {
  newEmail: "",
  newPassword: "",
  confirmNewPassword: "",
  newDisplayName: "",
};

export const UserSettings = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const dispatch = useAppDispatch();

  const changeDisplayNameHandler = () => {
    if (!formFields.newDisplayName) return;
    dispatch(changeDisplayName(formFields.newDisplayName));
  };
  const changeEmailHandler = () => {
    if (!formFields.newEmail) return;
    dispatch(changeEmail(formFields.newEmail));
  };
  const changePasswordHandler = () => {
    if (!formFields.newPassword) return;
    if (formFields.newPassword != formFields.confirmNewPassword) return;
    dispatch(changePassword(formFields.newPassword));
  };

  const deleteAccountHandler = () => {
    dispatch(deleteUser());
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <UserSettingsContainer>
      <DashboardFormInput
        label="Change Display Name?"
        type="text"
        onChange={handleChange}
        name="newDisplayName"
        value={formFields.newDisplayName}
      />
      <LeafButton onClick={changeDisplayNameHandler}>
        Change display name
      </LeafButton>

      <DashboardFormInput
        label="Change Email?"
        type="email"
        onChange={handleChange}
        name="newEmail"
        value={formFields.newEmail}
      />
      <LeafButton onClick={changeEmailHandler}>Change email address</LeafButton>

      <DashboardFormInput
        label="Change Password?"
        type="password"
        onChange={handleChange}
        name="newPassword"
        value={formFields.newPassword}
      />
      <div></div>

      <DashboardFormInput
        label="Confirm new password"
        type="password"
        onChange={handleChange}
        name="confirmNewPassword"
        value={formFields.confirmNewPassword}
      />
      <LeafButton onClick={changePasswordHandler}>Change Password</LeafButton>
      <BlackLeafButton onClick={deleteAccountHandler}>
        Delete account
      </BlackLeafButton>
    </UserSettingsContainer>
  );
};

export default UserSettings;

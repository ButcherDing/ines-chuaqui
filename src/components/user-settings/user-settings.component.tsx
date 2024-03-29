import { useState, FC } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";

import {
  changeDisplayNameAsync,
  changeEmailAsync,
  changePasswordAsync,
  deleteAccountAsync,
  selectError,
  UserData,
} from "../../store/user/user-slice";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { BlackLeafButton } from "../button/button.styles";
import {
  UserSettingsContainer,
  DashboardFormInput,
  UserSettingsButton,
  DeleteButton,
} from "./user-settings.styles";

const defaultFormFields = {
  newEmail: "",
  newPassword: "",
  confirmNewPassword: "",
  newDisplayName: "",
  confirmDelete: "",
};

export type UserSettingsProps = {
  currentUser: UserData;
};

export const UserSettings: FC<UserSettingsProps> = ({ currentUser }) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.user);

  const [displayDeleteConfirm, setDisplayDeleteConfirm] = useState(false);

  const changeDisplayNameAsyncHandler = () => {
    if (!formFields.newDisplayName) return;
    dispatch(changeDisplayNameAsync(formFields.newDisplayName));
  };
  const changeEmailAsyncHandler = () => {
    if (!formFields.newEmail) return;
    dispatch(changeEmailAsync(formFields.newEmail));
  };
  const changePasswordAsyncHandler = () => {
    if (!formFields.newPassword) return;
    if (formFields.newPassword !== formFields.confirmNewPassword) return;
    dispatch(changePasswordAsync(formFields.newPassword));
  };

  const deleteAccountAsyncHandler = () => {
    setDisplayDeleteConfirm(true);
    if (formFields.confirmDelete === currentUser.email)
      dispatch(deleteAccountAsync());
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
      <UserSettingsButton
        buttonType={BUTTON_TYPE_CLASSES.leaf}
        isLoading={isLoading}
        onClick={changeDisplayNameAsyncHandler}
      >
        Change display name
      </UserSettingsButton>

      <DashboardFormInput
        label="Change Email?"
        type="email"
        onChange={handleChange}
        name="newEmail"
        value={formFields.newEmail}
      />
      <UserSettingsButton
        buttonType={BUTTON_TYPE_CLASSES.leaf}
        isLoading={isLoading}
        onClick={changeEmailAsyncHandler}
      >
        Change email address
      </UserSettingsButton>

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
      <UserSettingsButton
        buttonType={BUTTON_TYPE_CLASSES.leaf}
        isLoading={isLoading}
        onClick={changePasswordAsyncHandler}
      >
        Change Password
      </UserSettingsButton>
      {displayDeleteConfirm && (
        <DashboardFormInput
          label="type your email to confirm delete"
          type="text"
          onChange={handleChange}
          name="confirmDelete"
          value={formFields.confirmDelete}
        />
      )}
      <DeleteButton onClick={deleteAccountAsyncHandler}>
        Delete account
      </DeleteButton>
      <>
        {error.dashboard && (
          <div style={{ color: "red" }}>{`error: ${error.dashboard}`}</div>
        )}
      </>
    </UserSettingsContainer>
  );
};

export default UserSettings;

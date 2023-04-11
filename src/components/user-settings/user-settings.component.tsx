import { useState, useEffect, FC, MouseEvent, FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";

import {
  changeDisplayNameAsync,
  changeEmailAsync,
  changePasswordAsync,
  deleteAccountAsync,
  selectErrorMessage,
  UserData,
} from "../../store/user/user-slice";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { BlackLeafButton } from "../button/button.styles";
import {
  UserSettingsContainer,
  DashboardFormInput,
  UserSettingsButton,
  ChangePasswordButton,
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
  // const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.user);
  const errorMessage = useAppSelector(selectErrorMessage);

  const [displayDeleteConfirm, setDisplayDeleteConfirm] = useState(false);

  const changeDisplayNameAsyncHandler = () => {
    if (!formFields.newDisplayName) return;
    dispatch(changeDisplayNameAsync(formFields.newDisplayName));
  };
  const changeEmailAsyncHandler = () => {
    if (!formFields.newEmail) return;
    dispatch(changeEmailAsync(formFields.newEmail));
  };
  const changePasswordAsyncHandler = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
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
    let errorMessage = null;
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

<<<<<<< Updated upstream
      <form id="change-password" onSubmit={changePasswordAsyncHandler}>
        <DashboardFormInput
          label="Change Password?"
          type="password"
          required
          onChange={handleChange}
          name="newPassword"
          value={formFields.newPassword}
        />
        <DashboardFormInput
          label="Confirm New Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmNewPassword"
          value={formFields.confirmNewPassword}
        />
      </form>
      <ChangePasswordButton
=======
      <DashboardFormInput
        label="Change Password?"
        type="password"
        onChange={handleChange}
        name="newPassword"
        value={formFields.newPassword}
      />
      <div></div>

      <DashboardFormInput
        label="Retype new password"
        type="password"
        onChange={handleChange}
        name="confirmNewPassword"
        value={formFields.confirmNewPassword}
      />
      <UserSettingsButton
>>>>>>> Stashed changes
        buttonType={BUTTON_TYPE_CLASSES.leaf}
        isLoading={isLoading}
        form="change-password"
      >
        Change Password
      </ChangePasswordButton>

      {displayDeleteConfirm && (
        <DashboardFormInput
          label="type your email to confirm delete"
          type="text"
          onChange={handleChange}
          name="confirmDelete"
          value={formFields.confirmDelete}
        />
      )}
      <BlackLeafButton onClick={deleteAccountAsyncHandler}>
        Delete account
      </BlackLeafButton>
      <>
        {errorMessage && (
          <div style={{ color: "red" }}>{`error: ${errorMessage}`}</div>
        )}
      </>
    </UserSettingsContainer>
  );
};

export default UserSettings;

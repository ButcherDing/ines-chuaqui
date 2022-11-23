import { Fragment } from "react";
import { signOut, UserData } from "../../store/user/user-slice";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";

import { OrderHeaders } from "./auth-signedin-display.styles";
import Button from "../button/button.component";

export const SignedInDisplay = () => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(
    (state) => state.user.currentUser as UserData
  );
  const signOutHandler = () => {
    dispatch(signOut());
  };

  return (
    <Fragment>
      {/* <h4>Welcome back, {currentUser.displayName}</h4>
      <OrderHeaders>
        <span>Item</span>
        <span>Order Date</span>
        <span>Price</span>
      </OrderHeaders>
      {currentUser.orderHistory.map((order) => {
        // <OrderRow order={order} key={order.datePurchased} />;
      })}
      <Button onClick={signOutHandler}>Sign Out</Button> */}
    </Fragment>
  );
};

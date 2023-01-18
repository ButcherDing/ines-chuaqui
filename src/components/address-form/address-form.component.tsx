import React, { FormEvent } from "react";

import { AddressElement } from "@stripe/react-stripe-js";
import { StripeAddressElementChangeEvent } from "@stripe/stripe-js";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AddressFormContainer } from "./address-form.styles";

const AddressForm = () => {
  const navigate = useNavigate();

  const goToContactHandler = () => {
    navigate("/contact");
  };

  const addressChangeHandler = (event: StripeAddressElementChangeEvent) => {
    if (event.complete) {
      // TODO do a thing
    }
  };

  return (
    <AddressFormContainer>
      {/* <span>
        Currently only shipping to Canada, U.S., U.K. Please{" "}
        <Link to={"./contact"}>get in touch</Link> if you would like to ship
        elsewhere.
      </span> */}
      <h4>Shipping Address</h4>
      <AddressElement
        options={{ mode: "shipping", allowedCountries: ["US", "CA"] }}
        onChange={addressChangeHandler}
      />
    </AddressFormContainer>
  );
};

export default AddressForm;

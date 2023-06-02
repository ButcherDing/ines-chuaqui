import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PaymentStatus from "../../components/payment-status/payment-status.component";
import { RouteContainer } from "../../general.styles";

export const CheckoutSuccess = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigate("/gallery");
  //   }, 8000);
  // }, []);

  return (
    <RouteContainer>
      <h1>Thank You! 🎉</h1>
      <p>
        Your order was submitted successfully! You'll receive an email invoice
        shortly. <br />
        We'll also send you back to the gallery in a few seconds.
      </p>
      {/* TODO <PaymentStatus /> */}
    </RouteContainer>
  );
};

export default CheckoutSuccess;

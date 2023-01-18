import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const CheckoutSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/gallery");
    }, 8000);
  }, []);

  return (
    <>
      <h5>
        Your order was submitted successfully! You will receive an email invoice
        shortly{" "}
      </h5>
      <span>You'll be sent back to the gallery in a few seconds.</span>
    </>
  );
};

export default CheckoutSuccess;

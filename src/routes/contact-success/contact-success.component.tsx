import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ContactSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/gallery");
    }, 8000);
  }, []);

  return (
    <>
      <h5>
        Your message was sent successfully. We'll get back to you as soon as we
        can.
      </h5>
      <span>You'll be sent back to the gallery shortly.</span>
    </>
  );
};

export default ContactSuccess;

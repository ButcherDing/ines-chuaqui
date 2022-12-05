import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ContactSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/gallery");
    }, 4000);
  }, []);

  return (
    <>
      <h4>
        Your message was sent successfully. We'll get back to you as soon as we
        can.
      </h4>
    </>
  );
};

export default ContactSuccess;

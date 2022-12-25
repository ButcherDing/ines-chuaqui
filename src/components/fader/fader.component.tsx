import { FC, useEffect, useState } from "react";
import { useAppSelector } from "../../store/hooks/hooks";
import { FaderContainer } from "./fader.styles";

type FaderProps = {
  faderMessage: string;
};

export const Fader: FC<FaderProps> = ({ faderMessage = "" }) => {
  const [fade, setFade] = useState("");
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  useEffect(() => {
    setFade("fade-in");
    setTimeout(() => {
      setFade("fade-out");
    }, 2000);
  }, [cartItems]);

  //// REPEAT FADE IN AND OUT

  // useEffect(() => {
  //   const timeout = setInterval(() => {
  //     fade === "fade-in" ? setFade("fade-out") : setFade("fade-in");
  //   }, 1000);
  //   return () => clearInterval(timeout);
  // }, [fade]);

  return (
    <>
      <FaderContainer className={fade}>{faderMessage}</FaderContainer>
    </>
  );
};

export default Fader;

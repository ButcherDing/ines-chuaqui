import { FC } from "react";
import { primaryShade } from "../../general.styles";
import { TextSection, TextStyle } from "./textbox-fade-in.styles";

type TextboxFadeInProps = {
  text: string;
};

const DELAY = 6; // ms
export const TextboxFadeIn: FC<TextboxFadeInProps> = ({ text }) => {
  // Splitting text on each character and return an array of HTML nodes.

  const letters = text.split("").map((letter, index) => {
    // Calculate delay for each sign
    const delayCounter = DELAY * (index + 1);

    return (
      <TextStyle key={index} delay={delayCounter} color={primaryShade}>
        {letter === " " ? <>&nbsp;</> : letter}
      </TextStyle>
    );
  });

  return <TextSection>{letters}</TextSection>;
};

export default TextboxFadeIn;

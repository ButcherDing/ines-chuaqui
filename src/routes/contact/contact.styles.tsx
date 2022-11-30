import styled from "styled-components";
import {
  primaryColor,
  primaryShade,
  primaryShade2,
  primaryTint,
  primaryTint2,
  secondaryColor,
  secondaryTint,
  secondaryTint2,
} from "../../general.styles";

export const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.15);
  border-radius: 1rem;
  margin: 4rem;

  background-image: linear-gradient(to right, ${primaryTint2}, ${primaryTint2});
  overflow: hidden;
`;

export const ContactBox = styled.div`
  /* color: #45260a; */
  color: inherit;
  margin-bottom: 3.2rem;

  *:focus {
    outline: none;
    box-shadow: 0 0 0 0.5rem rgba(253, 242, 233, 0.8);
  }
`;

export const ContactTextBox = styled.div`
  padding: 4.8rem 6.4rem 6.4rem 6.4rem;
  color: ${primaryShade};
`;

export const ContactText = styled.p`
  font-size: 1.8rem;
  line-height: 1.8;
  margin-bottom: 4.8rem;
`;

export const ContactImageBox = styled.div`
  background-image: linear-gradient(
      to right bottom,
      ${primaryShade}00,
      ${primaryShade2}00
    ),
    url("https://i.ibb.co/smjshWG/the-dawning.jpg");
  background-size: cover;
  background-position: center;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);
`;

export const ContactForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 3.2rem;
  row-gap: 2.4rem;

  input,
  textarea,
  select {
    width: 100%;
    padding: 1.2rem;
    font-size: 1.8rem;
    font-family: inherit;
    color: inherit;
    border: none;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);

    input::placeholder {
      color: #aaa;
    }
  }
`;

// currently not used
export const ContactFormLabel = styled.label`
  display: block;
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 1.2rem;
`;

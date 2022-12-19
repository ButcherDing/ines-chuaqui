import styled from "styled-components";
import {
  primaryShade,
  primaryShade2,
  primaryTint2,
} from "../../general.styles";

export const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  margin: 7% 4%;

  background-image: linear-gradient(to right, ${primaryTint2}, ${primaryTint2});
  overflow: hidden;

  @media (max-width: 50em) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 3fr;
  }
`;

export const ContactBox = styled.div`
  /* color: #45260a; */
  color: inherit;
  margin-bottom: 3.2rem;

  *:focus {
    outline: none;
    box-shadow: 0 0 0 0.5rem rgba(253, 242, 233, 0.8);
  }

  @media (max-width: 50em) {
    grid-row-start: 2;
  }
`;

export const ContactTextBox = styled.div`
  padding: 4% 8%;
  color: ${primaryShade};
`;

export const ContactText = styled.p`
  /* font-size: 1.8rem; */
  /* line-height: 1.8; */
  margin-bottom: 4.8rem;
`;

export const ContactImageBox = styled.div`
  background-image: linear-gradient(
      to right bottom,
      ${primaryShade}00,
      ${primaryShade}00
    ),
    url("https://i.ibb.co/smjshWG/the-dawning.jpg");
  background-size: cover;
  background-position: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
`;

export const ContactTitle = styled.h2`
  /* letter-spacing: 0rem;
  font-weight: 500; */
`;
export const ContactForm = styled.form`
  display: flex;
  column-gap: 3.2rem;
  flex-direction: column;
  gap: 3.2rem;

  /* align-items: center; */

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

  textarea {
    /* height: 100%; */
    padding-bottom: 10rem;
  }

  button {
    margin-top: 2.4rem;
    padding: 1.2rem 8rem;
    align-self: center;
  }
`;

// currently not used
export const ContactFormLabel = styled.label`
  display: block;
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 1.2rem;
`;

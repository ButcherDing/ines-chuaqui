import { Fragment } from "react";
import Button from "../../components/button/button.component";
import { LeafButton } from "../../components/button/button.styles";

import {
  ContactContainer,
  ContactBox,
  ContactTextBox,
  ContactText,
  ContactForm,
  ContactImageBox,
  ContactFormLabel,
} from "./contact.styles";

export const Contact = () => {
  return (
    <ContactContainer>
      <ContactBox>
        <ContactTextBox className="cta-text-box">
          <h2>Get in touch</h2>
          <ContactText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ratione
            tempore, cum illo corrupti, veniam similique iusto sapiente quia
            corporis quos, nemo ab sequi ullam animi officia quas? Vero,
            consequuntur?
          </ContactText>

          <ContactForm className="cta-form" action="#">
            <div>
              <ContactFormLabel htmlFor="full-name">Full Name</ContactFormLabel>
              <input
                id="full-name"
                type="text"
                placeholder="John Smith"
                required
              />
            </div>

            <div>
              <ContactFormLabel htmlFor="email">Email address</ContactFormLabel>
              <input
                id="email"
                type="email"
                placeholder="me@example.com"
                required
              />
            </div>

            <div>
              <ContactFormLabel htmlFor="message">Message:</ContactFormLabel>
              <textarea id="message" placeholder="hello" required />
            </div>

            <div>
              <ContactFormLabel htmlFor="select-where">
                Where did you hear about this site?
              </ContactFormLabel>
              <select id="select-where" required>
                <option value="">Please choose one option:</option>
                <option value="family">Friends or family</option>
                <option value="show">Art show</option>
                <option value="word of mouth">Word of mouth</option>
                <option value="internet">Internet</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* <button className="btn btn--form">Send</button> */}
            <LeafButton>Send</LeafButton>

            {/* <input type="checkbox" />
                <input type="number" /> */}
          </ContactForm>
        </ContactTextBox>
      </ContactBox>
      <ContactImageBox />
    </ContactContainer>
  );
};

export default Contact;

import { Fragment } from "react";
import Button from "../../components/button/button.component";
import { LeafButton } from "../../components/button/button.styles";
import TextboxFadeIn from "../../components/textbox-fade-in/textbox-fade-in.component";

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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            aspernatur consequatur dolore voluptatem ad nemo molestiae nihil
            ducimus natus necessitatibus praesentium, nisi architecto harum fuga
            temporibus nesciunt voluptatum. Omnis, reprehenderit.
          </ContactText>
          {/* Alternative Sweeping-in text animation
          <TextboxFadeIn
            text={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
  minima voluptatum unde corporis, dolorum eaque hic praesentium ut
  reiciendis vero! Nulla ea debitis consequuntur vitae, hic
  perspiciatis beatae illo non.`}
          ></TextboxFadeIn> */}

          <ContactForm method="post" name="contact" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />

            <div>
              <ContactFormLabel htmlFor="name">Name</ContactFormLabel>
              <input
                name="name"
                id="name"
                type="text"
                placeholder="John Smith"
                required
              />
            </div>

            <div>
              <ContactFormLabel htmlFor="email">Email address</ContactFormLabel>
              <input
                name="email"
                id="email"
                type="email"
                placeholder="me@example.com"
                required
              />
            </div>

            <div>
              <ContactFormLabel htmlFor="message">Message:</ContactFormLabel>
              <textarea
                name="message"
                id="message"
                placeholder="hello"
                required
              />
            </div>

            <div>
              <ContactFormLabel htmlFor="select-where">
                Where did you hear about this site?
              </ContactFormLabel>
              <select name="select-where" id="select-where" required>
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

import { useNavigate } from "react-router-dom";
import { LeafButton } from "../../components/button/button.styles";

import {
  ContactContainer,
  ContactBox,
  ContactTextBox,
  ContactText,
  ContactForm,
  ContactImageBox,
  ContactFormLabel,
  ContactTitle,
} from "./contact.styles";

export const Contact = () => {
  const navigate = useNavigate();

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    navigate("/contact/success");
  };

  return (
    <ContactContainer>
      <ContactBox>
        <ContactTextBox className="cta-text-box">
          <ContactTitle>Get in touch</ContactTitle>
          <ContactText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            aspernatur consequatur dolore voluptatem ad nemo molestiae nihil
            ducimus natus necessitatibus praesentium, nisi architecto harum fuga
            temporibus nesciunt voluptatum. Omnis, reprehenderit.
          </ContactText>

          <ContactForm
            onSubmit={onSubmitHandler}
            method="post"
            name="contact"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact" />

            <div>
              <ContactFormLabel htmlFor="name">Name</ContactFormLabel>
              <input
                name="name"
                id="name"
                type="text"
                placeholder="Harry Maclary"
                required
              />
            </div>

            <div>
              <ContactFormLabel htmlFor="email">Email address</ContactFormLabel>
              <input
                name="email"
                id="email"
                type="email"
                placeholder="hmaclary@example.com"
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

            <LeafButton>Send</LeafButton>
          </ContactForm>
        </ContactTextBox>
      </ContactBox>
      <ContactImageBox />
    </ContactContainer>
  );
};

export default Contact;

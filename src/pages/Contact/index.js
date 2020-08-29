import React, { useState } from "react";
import { Button, Form, Container, TextArea, Segment } from "semantic-ui-react";
import "./Contact.css";
import axios from "axios";

export default function Contact() {
  const [message, setMessage] = useState({
    name: "",
    message: "",
    email: "",
    sent: false,
    buttonText: "Send Message",
  });

  const handleReset = () => {
    setMessage({
      name: "",
      message: "",
      email: "",
      buttonText: "Message Sent",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage({ ...message, buttonText: "zooming..." });
    let data = {
      name: message.name,
      message: message.message,
      email: message.email,
    };
    axios
      .post("https://emily-wirtz.vercel.app/", data)
      .then((res) => {
        setMessage({ ...message, sent: true }, handleReset());
      })
      .catch((err) => {
        console.log((`Message not sent: `, err));
      });
  };

  return (
    <Container>
      <Segment centered raised id="contact-segment">
        <Form size="big" onSubmit={(e) => handleSubmit(e)}>
          <Form.Input
            label="name"
            control="input"
            placeholder="Your name"
            onChange={(e) => setMessage({ ...message, name: e.target.value })}
            value={message.name}
          />

          <Form.Input
            label="email"
            control="input"
            placeholder="Your email address"
            onChange={(e) => setMessage({ ...message, email: e.target.value })}
            value={message.email}
          />
          <Form.Field
            control={TextArea}
            label="message"
            placeholder="Your message"
            onChange={(e) =>
              setMessage({ ...message, message: e.target.value })
            }
            value={message.message}
          />
          <Form.Field control={Button} content="Submit" basic color="yellow" />
        </Form>
      </Segment>
    </Container>
  );
}

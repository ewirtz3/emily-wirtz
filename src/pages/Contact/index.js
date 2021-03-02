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
    buttonText: "send message",
  });

  const handleReset = () => {
    setMessage({
      name: "",
      message: "",
      email: "",
      buttonText: "message sent!",
    });
  };

  const handleSubmit = (e) => {
    console.log(`e:>>`, e);
    console.log(`message:>>`, message);
    e.preventDefault();
    setMessage({ ...message, buttonText: "zooming..." });
    console.log(`message:>>`, message);
    let data = {
      name: message.name,
      message: message.message,
      email: message.email,
    };
    console.log(`data:>>`, data);
    const proxyUrl = "https://boiling-hollows-94393.herokuapp.com/";
    const url = "https://node-api-woad.vercel.app/api/v1";
    axios
      .post(`${proxyUrl}/${url}`, data)
      .then((res) => {
        console.log(`res:>>`, res);
        setMessage({ ...message, sent: true });
        handleReset();
      })
      .catch((err) => {
        console.log((`Message not sent: `, err));
      });
  };

  return (
    <Container>
      <Segment centered raised id="contact-segment">
        <Form size="big" onSubmit={(e) => handleSubmit(e)} data-netlify="true">
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
            placeholder={"Your message"}
            onChange={(e) =>
              setMessage({ ...message, message: e.target.value })
            }
            value={message.message}
          />
          <Form.Field
            control={Button}
            content={message.buttonText}
            basic
            color="yellow"
          />
        </Form>
      </Segment>
    </Container>
  );
}

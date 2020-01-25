import React, { useState } from "react";
import MessageBubble from "../components/messageBubble";
import styled from "styled-components";
import Header from "../components/header";

const Home = ({ messages }) => {
  const [messagesState, setMessage] = useState(messages);
  const [inputText, setInputText] = useState("");

  const handleSubmit = () => {
    const date = new Date();
    const hour = `${date.getHours()}:${date.getMinutes()}`;

    setMessage(messagesState => [
      ...messagesState,
      { message: inputText, hour: hour }
    ]);
  };

  return (
    <Container>
      <Header />

      {messagesState.map((message, index) => (
        <MessageBubble
          key={index}
          message={message.message}
          hour={message.hour}
        />
      ))}

      <InputContainer>
        <InputBox
          type="text"
          onChange={e => setInputText(e.target.value)}
        ></InputBox>

        <SubmitButton onClick={() => handleSubmit()}>Enviar</SubmitButton>
      </InputContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 30%;
  background-color: #e8ddba;
  padding: 20px;
`;

const InputContainer = styled.div``;

const InputBox = styled.input``;

const SubmitButton = styled.button``;

Home.getInitialProps = async () => {
  const messages = [
    { message: "Texto 1", hour: "11:10" },
    { message: "Texto 2", hour: "12:10" },
    { message: "Texto 3", hour: "12:30" }
  ];

  return {
    messages: messages
  };
};

export default Home;

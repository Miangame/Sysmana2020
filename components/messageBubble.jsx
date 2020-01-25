import React from "react";
import styled from "styled-components";

const MessageBubble = ({message, hour}) => (
  <ContainerMessageBubble>
    <Message>{message}</Message>
    <Hour>{hour}</Hour>
  </ContainerMessageBubble>
);

const ContainerMessageBubble = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #5dd881;
  border-radius: 7px;
  padding: 5px;
  width: 40%;
  margin-bottom: 10px;

`;

const Message = styled.p``;

const Hour = styled.span`
  display: flex;
  align-items: flex-end;
  font-size: 10px;
  text-align: right;
`;

export default MessageBubble;

import React, { useEffect, useState } from "react";
import { useChatStore } from "./hooks/zustand";
import styled from "styled-components";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

const App = () => {
  const { messages, addMessage } = useChatStore();
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    const message = {
      text: input,
      sender: "You",
      timestamp: new Date(),
    };
    addMessage(message);
    socket.emit("message", message);
    setInput("");
  };
  useEffect(() => {
    socket.on("message", (message) => {
      addMessage(message);
    });
    return () => socket.disconnect();
  }, [addMessage]);
  return (
    <Container>
      <StyledHeader>Chat App</StyledHeader>
      <StyledMessageList>
        {messages.map((msg, index) => (
          <MessageItem key={index} isSender={msg.sender === "You"}>
            <p>{msg.text}</p>
            <Timestamp>
              {new Date(msg, timestamp).toLocaleTimeString()}
            </Timestamp>
          </MessageItem>
        ))}
      </StyledMessageList>
      <StyledFooter>
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <Button onClick={sendMessage}>Send</Button>
      </StyledFooter>
    </Container>
  );
};
export default App;

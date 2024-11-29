import e from "express";
import React, { useState } from "react";
import styled from "styled-components";

const UILogin = (e) => {
  e.preventDefault();
  console.log("ログイン：", {
    usename,
    password,
  });

  return (
    <StyledLoginWrapper>
      <StyledLoginCard>
        <StyledTitle>
          <form onSubmit={UILogin}>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Button type="submit">ログイン</Button>
            <RegisterLink>新規登録はこちら</RegisterLink>
          </form>
        </StyledTitle>
      </StyledLoginCard>
    </StyledLoginWrapper>
  );
};
export default UILogin;

const StyledLoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to bottom right, #4c8bf5, #ffffff);
`;

const StyledLoginCard = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 24rem;
`;
const Button = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: #4c8bf5;
  color: white;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #3c79d0;
  }
`;

const RegisterLink = styled.p`
  text-align: center;
  margin-top: 1rem;
  color: #4c8bf5;
  cursor: pointer;
`;

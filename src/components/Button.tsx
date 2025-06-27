import type { ReactNode } from "react";
import styled from "styled-components";

const Btn = styled.button`
  padding: 6px;
  border-radius: 10px;
  &:hover {
    background-color: rgb(19 0 34 / 35%);
    color: red;
  }
`;

type ButtonType = {
  children: ReactNode;
  onClick: () => void;
};

export const Button = ({ children, onClick }: ButtonType) => {
  return <Btn onClick={onClick}>{children}</Btn>;
};

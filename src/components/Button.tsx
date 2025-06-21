import type { ReactNode } from "react";

type ButtonType = {
  children: ReactNode;
  onClick: () => void;
};

export const Button = ({ children, onClick }: ButtonType) => {
  return <button onClick={onClick}>{children}</button>;
};

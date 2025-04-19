import { type ReactNode } from "react";

interface TextProps {
  children: ReactNode;
}

export const Text = ({ children }: TextProps) => {
  return children;
};

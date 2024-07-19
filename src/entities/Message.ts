import { ReactNode } from "react";

export interface Message {
  input: string | ReactNode;
  questions: string[];
}

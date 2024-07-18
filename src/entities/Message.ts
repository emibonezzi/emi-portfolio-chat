import { ReactNode } from "react";

export interface Message {
  input: string;
  questions: string[];
  media?: string | undefined;
}

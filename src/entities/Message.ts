import { Question } from "./Question";

export interface Message {
  input: string;
  questions: string[];
  answered: boolean;
}

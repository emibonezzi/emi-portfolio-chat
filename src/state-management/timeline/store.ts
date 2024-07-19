import { create } from "zustand";
import { Message } from "../../entities/Message";

interface TimelineStore {
  timeline: Message[];
  userResponses: string[];
  setTimeline: (newMessage: Message) => void;
  setUserResponses: (response: string) => void;
}

const useTimelineStore = create<TimelineStore>((set) => ({
  timeline: [
    {
      input: `Ciao! 👋
This is Emi, I'm a Full Stack Developer based in New York.`,
      questions: ["Tell me more!", "Enough, send resume."],
    },
  ],
  userResponses: [],
  setTimeline: (newMessage) =>
    set((store) => ({ timeline: [...store.timeline, newMessage] })),
  setUserResponses: (response) =>
    set((store) => ({ userResponses: [...store.userResponses, response] })),
}));

export default useTimelineStore;

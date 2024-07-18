import { create } from "zustand";
import { Message } from "../../entities/Message";

interface TimelineStore {
  timeline: Message[];
  setTimeline: (oldMessage: Message, newMessage: Message) => void;
}

const useTimelineStore = create<TimelineStore>((set) => ({
  timeline: [
    {
      input: `Ciao! 👋
This is Emi, I'm an italian Full Stack Developer based in New York.`,
      questions: ["Who is this?", "Enough, send CV."],
      answered: false,
    },
  ],
  setTimeline: (oldMessage, newMessage) =>
    set((store) => ({ timeline: [oldMessage, newMessage] })),
}));

export default useTimelineStore;

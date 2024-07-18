import { create } from "zustand";
import { Message } from "../../entities/Message";

interface TimelineStore {
  timeline: Message[];
  setTimeline: (newMessage: Message) => void;
}

const useTimelineStore = create<TimelineStore>((set) => ({
  timeline: [
    {
      input: `Ciao! 👋
This is Emi, I'm an italian Full Stack Developer based in New York.`,
      questions: ["Who is this?", "Enough, send CV."],
    },
  ],
  setTimeline: (newMessage) =>
    set((store) => ({ timeline: [...store.timeline, newMessage] })),
}));

export default useTimelineStore;

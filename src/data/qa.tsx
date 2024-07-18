import eyesonme from "../assets/eyesonme.gif";

export const qa = [
  {
    userAnswer: "Tell me more!",
    emiAnswer:
      "Well, I'm born and raised in Italy 🇮🇹 and then moved to the incredible New York! 🗽. I started off as a self-taught coder, building WordPress sites for clients as a side gig. Craving more freedom, I jumped into JavaScript and full stack development to really push the creative boundaries.",
    followUpQs: ["I see. What is your tech stack?", "Mmm pizza... 🍕"],
  },
  {
    userAnswer: "Enough, send resume.",
    emiAnswer: "Straight to the point. I like it. Here's my resume.",
    followUpQs: ["I see. How do you approach problems?", "Ok."],
  },
  {
    userAnswer: "Wow! What is your tech stack?",
    emiAnswer:
      "I mainly work with React and Typescript for building dynamic web applications.",
    followUpQs: ["Any other skills?", "Ok."],
  },
  {
    userAnswer: "Mmm pizza... 🍕",
    emiAnswer: "",
    media: eyesonme,
    followUpQs: ["Any other skills?", "Ok."],
  },
];

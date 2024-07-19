import { useEffect } from "react";
import "./App.css";
import Chat from "./components/Chat";
import useTimelineStore from "./state-management/timeline/store";
import { motion } from "framer-motion";

function App() {
  const { timeline } = useTimelineStore();

  useEffect(() => {
    const main = document.getElementById("main");
    if (main)
      main.scrollTo({
        top: main.scrollHeight,
        behavior: "smooth",
      });
  }, [timeline]);

  return (
    <div className="h-screen mt-5 flex justify-center p-5">
      <div id="main" className="overflow-y-auto p-3 pb-[60px]">
        {timeline.map((message) => (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              delay: 0.5,
              stiffness: 250,
              damping: 30,
            }}
          >
            <Chat input={message.input} userAnswers={message.questions} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import Chat from "./components/Chat";
import useTimelineStore from "./state-management/timeline/store";

function App() {
  const { timeline } = useTimelineStore();

  return (
    <div className="h-screen mt-5 flex justify-center p-5">
      <div>
        {timeline.map((message) => (
          <Chat
            input={message.input}
            userAnswers={message.questions}
            media={message.media}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

import propic from "../assets/propic.jpeg";
import { qa } from "../data/qa";
import useTimelineStore from "../state-management/timeline/store";

interface Props {
  input: string;
  userAnswers: string[];
}

const Chat = ({ input, userAnswers }: Props) => {
  const { setTimeline } = useTimelineStore();
  return (
    <div>
      <div>
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS chat bubble component" src={propic} />
            </div>
          </div>
          <div className="chat-header">
            <time className="text-xs ml-2 opacity-50">12:45</time>
          </div>
          <div className="chat-bubble">{input}</div>
          <div className="chat-footer opacity-50">Delivered</div>
        </div>
        <div className="chat chat-end my-5">
          <div className="chat-header"></div>
          <div className="flex gap-3">
            {userAnswers.map((answer) => (
              <button
                onClick={() => {
                  // find user answer in qa
                  const userAnswer = qa.find(
                    (answers) => answers.userAnswer === answer
                  );
                  setTimeline({
                    input: userAnswer?.emiAnswer!!,
                    questions: userAnswer?.followUpQs!!,
                  });
                }}
                className="btn btn-xs h-max btn-outline"
              >
                {answer}
              </button>
            ))}
          </div>
          <div className="chat-footer opacity-50 hidden">Seen at 12:46</div>
        </div>
      </div>
    </div>
  );
};

export default Chat;

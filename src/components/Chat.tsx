import propic from "../assets/propic.jpeg";
import { qa } from "../data/qa";
import useTimelineStore from "../state-management/timeline/store";

interface Props {
  input: string;
  userAnswers: string[];
  answered: boolean;
}

const Chat = ({ input, userAnswers, answered }: Props) => {
  const { setTimeline } = useTimelineStore();
  const sentTime = `${new Date().getHours()}:${new Date().getMinutes()}`;
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
            <time className="text-xs ml-2 opacity-50">{sentTime}</time>
          </div>
          <div className="chat-bubble">{input}</div>
          <div className="chat-footer opacity-50">Delivered</div>
        </div>
        <div className="chat chat-end my-5">
          <div className="chat-header"></div>
          <div className="flex gap-3">
            {!answered ? (
              userAnswers.map((answer) => (
                <button
                  onClick={() => {
                    // find user answer in qa
                    const selectedAnswer = qa.find(
                      (answers) => answers.userAnswer === answer
                    );
                    setTimeline(
                      {
                        input: input,
                        questions: [selectedAnswer?.userAnswer!!],
                        answered: true,
                      },
                      {
                        input: selectedAnswer?.emiAnswer!!,
                        questions: selectedAnswer?.followUpQs!!,
                        answered: false,
                      }
                    );
                  }}
                  className="btn btn-xs btn-outline"
                >
                  {answer}
                </button>
              ))
            ) : (
              <div className="chat chat-end">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS chat bubble component"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    />
                  </div>
                </div>
                <div className="chat-bubble">{userAnswers[0]}</div>
                <div className="chat-footer opacity-50">Seen at {sentTime}</div>
              </div>
            )}
          </div>
          <div className="chat-footer opacity-50 hidden">Seen at 12:46</div>
        </div>
      </div>
    </div>
  );
};

export default Chat;

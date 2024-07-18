import propic from "../assets/propic.jpeg";
import { qa } from "../data/qa";
import useTimelineStore from "../state-management/timeline/store";

interface Props {
  input: string;
  userAnswers: string[];
}

const Chat = ({ input, userAnswers }: Props) => {
  const { setTimeline, userResponses, setUserResponses } = useTimelineStore();
  const sentTime = `${new Date().getHours()}:${new Date().getMinutes()}`;
  // check if one of the possible answers have already been answered
  const userChoice = userAnswers.find((answer) =>
    userResponses.includes(answer)
  );
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
          {userChoice ? (
            userChoice
          ) : (
            <div className="flex gap-3">
              {userAnswers.map((answer) =>
                !userResponses.includes(answer) ? (
                  <button
                    onClick={() => {
                      // find user answer in qa
                      const selectedAnswer = qa.find(
                        (answers) => answers.userAnswer === answer
                      );
                      setUserResponses(answer);
                      setTimeline({
                        input: selectedAnswer?.emiAnswer!!,
                        questions: selectedAnswer?.followUpQs!!,
                      });
                    }}
                    className="btn btn-xs btn-outline"
                  >
                    {answer}
                  </button>
                ) : (
                  answer
                )
              )}
            </div>
          )}

          <div className="chat-footer opacity-50 hidden">Seen at 12:46</div>
        </div>
      </div>
    </div>
  );
};

export default Chat;

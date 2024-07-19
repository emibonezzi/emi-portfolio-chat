import { ReactNode } from "react";
import avatar from "../../public/avatar.jpeg";
import propic from "../../public/propic.jpeg";
import { qa } from "../data/qa";
import useTimelineStore from "../state-management/timeline/store";

interface Props {
  input: string | ReactNode;
  userAnswers: string[];
}

const Chat = ({ input, userAnswers }: Props) => {
  const { setTimeline, userResponses, setUserResponses, reset } =
    useTimelineStore();
  const sentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  // check if one of the possible answers have already been answered
  const userChoice = userAnswers.find((answer) =>
    userResponses.includes(answer)
  );
  return (
    <div>
      <div>
        <div className="chat chat-start lg:w-[600px]">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS chat bubble component" src={propic} />
            </div>
          </div>
          <div className="chat-header">
            <time className="text-xs ml-2 opacity-50">{sentTime}</time>
          </div>
          <div className="chat-bubble">{input}</div>
        </div>
        <div className="chat chat-end my-5">
          {userChoice ? (
            <>
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS chat bubble component" src={avatar} />
                </div>
              </div>
              <div className="chat-header"></div>
              <div className="chat-bubble">{userChoice}</div>
              <div className="chat-footer opacity-50">Seen at {sentTime}</div>
            </>
          ) : (
            <div className="flex gap-3">
              {userAnswers.map((answer) =>
                !userResponses.includes(answer) ? (
                  <button
                    onClick={() => {
                      if (answer === "Restart") {
                        // restart chat
                        reset();
                      } else {
                        // find user answer in qa
                        const selectedAnswer = qa.find(
                          (answers) => answers.userAnswer === answer
                        );
                        setUserResponses(answer);
                        setTimeline({
                          input: selectedAnswer?.emiAnswer!!,
                          questions: selectedAnswer?.followUpQs!!,
                        });
                      }
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

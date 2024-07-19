import { FaCloudDownloadAlt } from "react-icons/fa";
import newyork from "../../public/newyork.webp";
import okboss from "../../public/okboss.gif";
import ops from "../../public/ops.gif";
import resume from "../../public/resume.pdf";
import eyesonme from "../../public/eyesonme.gif";

export const qa = [
  {
    userAnswer: "Tell me more!",
    emiAnswer: (
      <p>
        Well, my full name is <strong>Emiliano Bonezzi</strong>, but you can
        call me <i>Emi</i>. I was born and raised in Italy 🇮🇹 and later moved to
        the amazing city of...
        <br />
        <br />
        <img src={newyork} alt="New York" />
        <br />I started my journey as a self-taught coder, building WordPress
        sites for clients on the side. Seeking more creativity and freedom, I
        dove into <strong className="text-primary">JavaScript</strong> and full
        stack development. ✨
      </p>
    ),
    followUpQs: ["I see. What is your tech stack?", "Mmm pizza... 🍕"],
  },
  {
    userAnswer: "Enough, send resume.",
    emiAnswer: (
      <>
        <img src={okboss} />
        <br />

        <a href={resume} target="_blank">
          <button className="btn btn-sm btn-outline">
            Download <FaCloudDownloadAlt />
          </button>
        </a>
      </>
    ),
    followUpQs: ["Explain your projects.", "Great! Let's connect."],
  },
  {
    userAnswer: "Explain your projects.",
    emiAnswer: (
      <p>
        Sure! This is my most recent one:
        <br />
        <br />
        <strong className="text-primary">New Work State</strong> <br />I
        developed a platform that aims to simplify the job search process for
        New York State positions by providing an efficient and user-friendly
        platform. It scrapes job listings from the official New York State jobs
        website and presents them in an organized and searchable format.
        <br /> <br />
        <a href="https://newworkstate-fe.vercel.app/jobs" target="_blank">
          <u>Live demo URL</u>
        </a>
        <br />
        <a
          href="https://www.linkedin.com/feed/update/urn:li:activity:7197650171525001216/"
          target="_blank"
        >
          <u>Why New Work State?</u>
        </a>
      </p>
    ),
    followUpQs: ["Great! Let's connect.", "Show me more."],
  },
  {
    userAnswer: "Great! Let's connect.",
    emiAnswer: (
      <p>
        Awesome! I'm excited to connect with you. You can reach out to me
        through the following channels:
        <br />
        <br />
        <strong>Email:</strong>{" "}
        <a className="text-primary" href="mailto:me@emilianobonezzi.com">
          me@emilianobonezzi.com
        </a>
        <br />
        <strong>LinkedIn:</strong>{" "}
        <a
          className="text-primary"
          href="https://www.linkedin.com/in/emiliano-bonezzi"
          target="_blank"
        >
          linkedin.com/in/emiliano-bonezzi
        </a>
        <br />
        <strong>GitHub:</strong>{" "}
        <a
          className="text-primary"
          href="https://github.com/emibonezzi"
          target="_blank"
        >
          github.com/emibonezzi
        </a>
        <br />
        <br />
        If haven't already you can download my resume here: <br />
        <a href={resume} target="_blank">
          <button className="btn btn-sm my-5 btn-outline">
            Download <FaCloudDownloadAlt />
          </button>
        </a>
        <br />
        Looking forward to hearing from you! Have a great day! 😊
      </p>
    ),
    followUpQs: ["Restart"],
  },
  {
    userAnswer: "OMG sorry 😐 What is your tech stack?",
    emiAnswer: (
      <p>
        I mainly work with <strong className="text-primary">React</strong> and{" "}
        <strong className="text-primary">Typescript</strong> for building
        dynamic web applications. On the backend, I'm proficient with{" "}
        <strong className="text-primary">NodeJS</strong> and{" "}
        <strong className="text-primary">ExpressJS</strong>. I prefer{" "}
        <strong className="text-primary">MongoDB</strong> for its flexibility
        and often deploy on AWS—because who doesn't love juggling 550
        microservices? 😂
      </p>
    ),

    followUpQs: ["I see. Any projects?"],
  },
  {
    userAnswer: "I see. What is your tech stack?",
    emiAnswer: (
      <p>
        I mainly work with <strong className="text-primary">React</strong> and{" "}
        <strong className="text-primary">Typescript</strong> for building
        dynamic web applications. On the backend, I'm proficient with{" "}
        <strong className="text-primary">NodeJS</strong> and{" "}
        <strong className="text-primary">ExpressJS</strong>. I prefer{" "}
        <strong className="text-primary">MongoDB</strong> for its flexibility
        and often deploy on AWS—because who doesn't love juggling 550
        microservices? 😂
      </p>
    ),
    followUpQs: ["Got it. Any projects?", "I work for Amazon."],
  },
  {
    userAnswer: "I work for Amazon.",
    emiAnswer: <img src={ops} />,
    followUpQs: ["Explain your projects."],
  },
  {
    userAnswer: "I see. Any projects?",
    emiAnswer: (
      <p>
        Sure! This is my most recent one:
        <br />
        <br />
        <strong className="text-primary">New Work State</strong> <br />I
        developed a platform that aims to simplify the job search process for
        New York State positions by providing an efficient and user-friendly
        platform. It scrapes job listings from the official New York State jobs
        website and presents them in an organized and searchable format.
        <br /> <br />
        <a href="https://newworkstate-fe.vercel.app" target="_blank">
          <u>Live demo URL</u>
        </a>
        <br />
        <a
          href="https://www.linkedin.com/feed/update/urn:li:activity:7197650171525001216/"
          target="_blank"
        >
          <u>Why New Work State?</u>
        </a>
      </p>
    ),
    followUpQs: ["Great! Let's connect.", "Show me more."],
  },
  {
    userAnswer: "Got it. Any projects?",
    emiAnswer: (
      <p>
        Sure! This is my most recent one:
        <br />
        <br />
        <strong className="text-primary">New Work State</strong> <br />I
        developed a platform that aims to simplify the job search process for
        New York State positions by providing an efficient and user-friendly
        platform. It scrapes job listings from the official New York State jobs
        website and presents them in an organized and searchable format.
        <br /> <br />
        <a href="https://newworkstate-fe.vercel.app/jobs" target="_blank">
          <u>Live demo URL</u>
        </a>
        <br />
        <a
          href="https://www.linkedin.com/feed/update/urn:li:activity:7197650171525001216/"
          target="_blank"
        >
          <u>Why New Work State?</u>
        </a>
      </p>
    ),
    followUpQs: ["Great! Let's connect.", "Show me more."],
  },
  {
    userAnswer: "Show me more.",
    emiAnswer: (
      <p>
        Here's another one:
        <br />
        <br />
        <strong className="text-primary">AI Soccer Journalist</strong> <br />
        I've built a serverless application that scrapes the latest football
        news from Reddit, filters the most relevant posts, generates engaging
        headlines using OpenAI, and tweets these updates automatically.
        <br /> <br />
        <a href="https://x.com/DeItaOneTwo" target="_blank">
          <u>Live URL</u>
        </a>
        <br />
        <a
          href="https://www.linkedin.com/feed/update/urn:li:activity:7199137146887122945"
          target="_blank"
        >
          <u>Tech stack and explanation</u>
        </a>
      </p>
    ),
    followUpQs: ["Great! Let's connect.", "A lil more? 🙏"],
  },
  {
    userAnswer: "A lil more? 🙏",
    emiAnswer: (
      <p>
        One more for you then!
        <br />
        <br />
        <strong className="text-primary">Weather On Scroll</strong> <br />
        This React application provides a dynamic way to view and interact with
        weather data based on the user's IP location or a searched city. The app
        facilitates smooth navigation between different sections of the page
        using vertical scrolling.
        <br /> <br />
        <a href="https://weather-onscroll.vercel.app" target="_blank">
          <u>Live URL</u>
        </a>
        <br />
        <a
          href="https://github.com/emibonezzi/weather-onscroll"
          target="_blank"
        >
          <u>GitHub</u>
        </a>
      </p>
    ),
    followUpQs: ["What motivates you?", "Great! Let's connect."],
  },
  {
    userAnswer: "Mmm pizza... 🍕",
    emiAnswer: <img src={eyesonme} />,
    followUpQs: ["OMG sorry 😐 What is your tech stack?"],
  },
  {
    userAnswer: "What motivates you?",
    emiAnswer: (
      <p>
        My work philosophy centers around integrity, continuous improvement, and
        collaboration. I strive to deliver high-quality work, always looking for
        ways to enhance my skills and knowledge. Working as a team and valuing
        everyone's input is crucial to achieving great results. 💡
      </p>
    ),
    followUpQs: ["Great! Let's connect."],
  },
];

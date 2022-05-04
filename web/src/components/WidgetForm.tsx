import { CloseButton } from "./CloseButton";

import bugImg from "../assets/bug.svg";
import ideaImg from "../assets/idea.svg";
import thoughtImg from "../assets/thought.svg";

const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImg,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImg,
      alt: "Imagem de uma lampada",
    },
  },
  THOUGHT: {
    title: "Outro",
    image: {
      source: thoughtImg,
      alt: "Imagem de um balão de pensamento",
    },
  },
};

export function WidgetForm() {
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none">
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>

      <footer>
        Feito com ♥ por{" "}
        <a
          href="https://github.com/MrLopes-lab"
          className="underline underline-offset-1"
        >
          Marcelo
        </a>
      </footer>
    </div>
  );
}
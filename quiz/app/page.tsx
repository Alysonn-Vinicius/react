'use client'
import { Modal } from "@/src/componentes/modal";
import { questions } from "@/src/data/question";
import { Resposta } from "@/src/types/resposta";
import { useState } from "react";

export default function Home() {
  const [questAtual, setQuestAtual] = useState(0);
  const [resSelected, setResSelected] = useState<Resposta | null>(null);
  const [showModalFim, setShowModalFim] = useState(false);
  const [correctQuest, setCorrectQuest] = useState(0);

  const handleOption = (res: Resposta) => {
    setResSelected(res);
    setTimeout(() => {
      if ((questAtual + 1) < questions.length) {
        setQuestAtual(questAtual + 1);
        setResSelected(null);
      } else {
        setShowModalFim(true);
      }
    }, 1000)
    if(res.correta) {
      setCorrectQuest(correctQuest + 1);
    }
  }

  return (
    <div className="w-full h-screen flex justify-center items-center bg-blue-600 p-4">
      {showModalFim ? <Modal corrects={correctQuest}/> :
        <main className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black ">
          {/*Pergunta */}
          <div className="p-5 font-bold text-2xl border-b border-x-gray-300">
            {questions[questAtual].questao}
          </div>

          {/**Alternativas */}
          {questions[questAtual].respostas.map(res => (
            <div className={`p-5 border-b ${resSelected?.id === res.id ? (resSelected.correta ? 'bg-green-400' : 'bg-red-400') : 'bg-white'} border-gray-200 cursor-pointer `} onClick={() => handleOption(res)}>{res.option}</div>
          ))}


          {/**Quantidade de perguntas */}
          <div className="p-5 text-center border-t border-gray-300">
            {questAtual + 1} de {questions.length} Pergunta{questions.length > 1 ? 's' : ''}
          </div>
        </main>
      }
    </div>
  );
}

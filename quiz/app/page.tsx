'use client'
import { questions } from "@/src/data/question";
import { Resposta } from "@/src/types/resposta";
import { useState } from "react";

export default function Home() {
  const handleCorrect = (resposta: Resposta) => {
    setResSelected(resposta);
    setTimeout(() => {
        setQuestAtual(questAtual + 1);
        setResSelected(null);
    }, 1000) // 1 segundo
  }

  const [questAtual, setQuestAtual] = useState(0);

  const [resSelected, setResSelected] = useState<Resposta | null>(null)



  return (
    <div className="w-full h-screen flex justify-center items-center bg-blue-600 p-4">
      <main className="w-full max-x-xl rounded-md bg-white text-black shadow shadow-black ">
        <div className="p-5 font-bold text-2xl border-b border-x-gray-300">{questions[questAtual].questao}</div>

        {questions[questAtual].respostas.map(res => (
          <div className={`p-5 border-b ${resSelected?.id === res.id
            ? (res.correta ? 'bg-green-400' : 'bg-red-400')
            : 'bg-white'} border-gray-200 cursor-pointer`} onClick={() => handleCorrect(res)}>
            {res.option}
          </div>
        ))}


        <div className="p-5 text-center border-t border-gray-300">
          {questAtual} de {questions.length} Perguntas
        </div>
      </main>
    </div>
  );
}

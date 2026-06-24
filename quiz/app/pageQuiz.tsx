'use client'
import { Modal } from "@/src/componentes/modal";
import { QuestionItem } from "@/src/componentes/questionItem";
import { questions } from "@/src/data/question";
import { Resposta } from "@/src/types/resposta";
import { useState } from "react";

export default function Quiz() {

  const [resSelected, setResSelected] = useState<Resposta | null>(null);
  const [questAtual, setQuestAtual] = useState(0);
  const [showModalFim, setShowModalFim] = useState(false);
  const [correctQuest, setCorrectQuest] = useState(0);

  const handleOption = (res: Resposta) => {
    if(resSelected === null){
      setResSelected(res);
       setTimeout(() => {
      if ((questAtual + 1) < questions.length) {
        setQuestAtual(questAtual + 1);
        setResSelected(null);
      } else {
        setShowModalFim(true);
      }
    }, 1000)
    }
    
   
    if (res.correta) {
      setCorrectQuest(correctQuest + 1);
    }
  }
  const handleInitial = () =>{
    setCorrectQuest(0);
    setQuestAtual(0);
    setResSelected(null)
    setShowModalFim(false)
  }

  return (
    <div className="w-full h-screen flex justify-center items-center bg-blue-600 p-4">
      {showModalFim
        ?
        <Modal 
          corrects={correctQuest} 
          init={handleInitial}
        />
        :
        <QuestionItem
          handleOption={handleOption}
          questao={questions[questAtual]}
          resSelected={resSelected}
          questAtual={questAtual}
          total={questions.length}
        />

      }
    </div>
  );
}

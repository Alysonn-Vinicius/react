import { useState } from "react";
import { questions } from "../data/question";
import { Resposta } from "../types/resposta";
import { Question } from "../types/question";

type Props ={
    questao: Question,
    resSelected: Resposta | null,
    handleOption: (res: Resposta) => void,
    questAtual: number,
    total: number
}



export const QuestionItem = ({questao, resSelected, questAtual, total, handleOption}:Props) => {
    
    return (
        <main className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black ">
            {/*Pergunta */}
            <div className="p-5 font-bold text-2xl border-b border-x-gray-300">
                {questao.questao}
            </div>

            {/**Alternativas */}
            {questao.respostas.map(res => (
                <div className={`p-5 border-b ${resSelected?.id === res.id ? (resSelected?.correta ? 'bg-green-400' : 'bg-red-400') : 'bg-blue-200'} cursor-pointer border border-blue-100 mx-2 my-2 px-2 py-3 rounded-md`} onClick={() => handleOption(res)}>{res.option}</div>
            ))}

            <div className="p-5 text-center border-t border-gray-300">
            {questAtual + 1} de {total} Pergunta{total > 1 ? 's' : ''}
            </div>

        </main>
    );
}
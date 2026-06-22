import { Question } from "../types/question";

export const questions: Question[] = [
    {
        id: 1,
        questao: "Qual a capital da França?",
        respostas: [
            { id: 1, option: "Londres", correta: false },
            { id: 2, option: "Paris", correta: true },
            { id: 3, option: "Roma", correta: false },
            { id: 4, option: "Madrid", correta: false },
        ]
    },
    {
        id: 2,
        questao: "O que não pode faltar em um bolo?",
        respostas: [
            { id: 1, option: "Corante", correta: false },
            { id: 2, option: "Àgua", correta: true },
            { id: 3, option: "Fermento", correta: false },
            { id: 4, option: "Oléo", correta: false },
        ]
    },
    {
        id: 3,
        questao: "Qual a capital da França?",
        respostas: [
            { id: 1, option: "Londres", correta: false },
            { id: 2, option: "Paris", correta: true },
            { id: 3, option: "Roma", correta: false },
            { id: 4, option: "Madrid", correta: false },
        ]
    },
   
]
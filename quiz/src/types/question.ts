import { Resposta } from "./resposta"

export type Question = {
    id: number,
    questao: string,
    respostas: Resposta[]
}
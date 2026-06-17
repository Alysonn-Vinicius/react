'use client'
import { Inputs } from "@/src/componentes/input";
import { Lista } from "@/src/componentes/Lista";
import { useState } from "react";



export default function Page() {
    const [tarefas, setTarefas] = useState<Tarefa[]>([
        { id: 1, nome: 'React', concluida: false }
    ]);
    
    const handleAdicionar = (nome:string) => {
        const existe = tarefas.some(item => item.nome.toLowerCase().trim() === nome.toLowerCase().trim());
         if (nome.trim() === '') return;
         if(existe) {
            alert('A tarefa já existe!');
            return;
         }
        setTarefas([...tarefas, {id: tarefas.length + 1, nome:nome, concluida: false}])
    }

    const handleRemove = (id:number) => {
         setTarefas(
        tarefas.filter(item => item.id !== id)
    )
    }   

    const handleConcluir = (id: number) => {
    setTarefas(
        tarefas.map(item => {

            if (item.id === id) {

                return {
                    ...item,
                    concluida: !item.concluida
                }

            }

            return item;

        })
    );

}

    return (
        <div className="w-screen h-screen bg-gray-950 flex items-center justify-center">
            <main className="bg-gray-800 max-w-xl w-full rounded-2xl p-8  flex flex-col gap-3">
                <div>
                    <h1 className="text-xl font-bold text-white">📋 Minha Lista de Tarefas</h1>
                    <p className="text-sm text-gray-500">Adicione, organize e realize suas tarefas</p>
                </div>
                <Inputs handle={handleAdicionar} />

                {tarefas.length > 0 ? <Lista listaTarefas={tarefas} handle={handleRemove} handleConcluir={handleConcluir}/>: <div className="text-gray-400 text-center text-xl my-2">Nenhuma tarefa cadastrada!</div>}

                <div className="border border-gray-700 p-3 rounded-md mt-3">
                    <span className="font-bold">Total:</span>
                    <span className="font-bold text-blue-500">{' '}{tarefas.length}</span>
                    {' '} Tarefas
                </div>
            </main >
        </div >
    );
}
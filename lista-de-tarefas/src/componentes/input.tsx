import { useState } from "react";

type Props = {
handle: (nome:string) => void,
}


export const Inputs = ({handle}:Props) => {
    const [nomeInput, setNomeInput] = useState('');
    return (
        <div className="flex gap-2 w-full">
            <input 
                type="text" 
                placeholder="Digite sua tarefa..." 
                className="border border-gray-500 rounded-md px-2 py-1 outline-none flex-1 focus:border-blue-500 focus:ring focus:ring-blue-500"
                value={nomeInput} 
                onChange={e=> setNomeInput(e.target.value)}
            />
            <button className="bg-blue-700 px-4 py-2 cursor-pointer rounded-md hover:bg-blue-500 transition-all" onClick={()=> {
                handle(nomeInput);
                setNomeInput('');
            }}
            >
                + Adicionar
            </button>
        </div>
    );
}
'use client'
import { TodoItem } from "@/src/types/TodoItem";
import { useState } from "react";


export default function Home() {

  const [nomeInput, setNomeInput] = useState('');

  const [listTarefa, setListTarefa] = useState<TodoItem[]>([
    {label:"Fazer bolo", check: false},
    {label:"Comprar bateria", check: false}
  ])

  const handleAdicionar = () => {
    if(nomeInput.trim() === "") {
      alert('Campo em branco!')
      return;
    }
    setListTarefa([...listTarefa, {label: nomeInput, check: false}])
    setNomeInput('');
  }

  const handleDelete = (id:number) =>{
    setListTarefa(
      listTarefa.filter((item,index) => index !== id)//assim apenas os que sõ index diferentes, vão passar pra nova lista e atulizar state.
    );
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center text-2xl">
        <h1 className="text-4xl mt-5">Lista de Tarefas</h1>

        <div className="flex w-full max-w-xl my-3 p-4 rounded-md bg-gray-700 border-2 border-gray-500">

          <input type="text"
          placeholder="O que deseja fazer?"
          className="flex-1 border border-black p-3 text-2xl text-black rounded-md mr-3 bg-white"
          value={nomeInput}
          onChange={(e)=>setNomeInput(e.target.value)}
          />
          <button className="cursor-pointer" onClick={handleAdicionar}>adicionar</button>
        </div>

        <p className='my-3 text-center'>{listTarefa.length} itens</p>

        <ul className="w-full max-w-full list-disc pl-5">
          {listTarefa.map((item, index) => (
            <li key={index}>{item.label} - <button className="hover:underline cursor-pointer" onClick={()=> handleDelete(index)}>[ deletar ]</button></li>
          ))}

        </ul>
    </div>
  );
}

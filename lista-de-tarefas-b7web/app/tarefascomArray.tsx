'use client'
import { TodoItem } from "@/src/types/TodoItem";
import { useState } from "react";


export default function Home() {

  const [nomeInput, setNomeInput] = useState('');

  const [listTarefa, setListTarefa] = useState<TodoItem[]>([
    {id: 1,label:"Fazer bolo", check: false},
    {id:2,label:"Comprar bateria", check: false}
  ])


  //adiciona item ao array
  const handleAdicionar = () => {
    if(nomeInput.trim() === "") {
      alert('Campo em branco!')
      return;
    }
    setListTarefa([...listTarefa, {id: 1, label: nomeInput, check: false}])
    setNomeInput('');
  }

  //deleta item
  const handleDelete = (id:number) =>{
    setListTarefa(
      listTarefa.filter((item,index) => index !== id)//assim apenas os que sõ index diferentes, vão passar pra nova lista e atulizar state.
    );
  }

  //altera o check
  const toggleItem=(index:number)=>{
    //clonar a lista primeiro, para qunao for setar a nova a tela atulaizar
    const newList = [...listTarefa];
    newList[index].check = !newList[index].check;
    setListTarefa(newList);
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

        <ul className="w-full max-w-full list-disc pl-96">
          {listTarefa.map((item, index) => (
            <li key={index}>
              <input type="checkbox" className="w-5 h-5 mr-3"  checked={item.check} onClick={()=>toggleItem(index)}/>
              {item.label} - <button className="hover:underline cursor-pointer" onClick={()=> handleDelete(index)}>[ deletar ]</button>
            </li>
          ))}

        </ul>
    </div>
  );
}

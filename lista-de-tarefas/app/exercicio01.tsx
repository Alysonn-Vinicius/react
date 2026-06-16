'use client'


import { pessoas } from "@/src/data/pessoas";
import { useState } from "react";


export default function atividade() {
  const [log, setLog] = useState(false);
  const [count, setCount] = useState(0);
  const handleAdc = () => {
    setCount(count + 1);
  }
  const handleSub = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert('valor minino atingido!')
    }

  }


  return (
    <div className="container mx-auto p-5 flex flex-col gap-3">
      <button className="bg-blue-600 p-3 text-white rounded-md cursor-pointer" onClick={() => alert('Olá, React.')}>
        clique
      </button>

      <button className="bg-blue-600 p-3 text-white rounded-md cursor-pointer" onClick={() => setLog(!log)}>
        ver lista
      </button>
      <ul>
        {log && pessoas.map(item => (
          <li key={item.id}>{item.nome}</li>
        ))}
      </ul>
      <br />
      <div>
        <h3 className="text-center mb-3">Contador</h3>
        <div className="flex gap-3 justify-center">
          <button className="bg-green-800 p-2 text-white rounded-md font-bold cursor-pointer" onClick={handleSub}>-</button>{count}<button className="bg-green-800 p-2 text-white rounded-md font-bold cursor-pointer" onClick={handleAdc}>+</button>
        </div>
      </div>
    </div>
  );
}

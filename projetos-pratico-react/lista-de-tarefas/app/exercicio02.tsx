'use client'
import { pessoas } from "@/src/data/pessoas";
import { useState } from "react";


export default function atividade() {   
    const maiores = pessoas.filter((item)=> item.idade >= 18);
    const [mostrarMaiores, setMostrarMaiores] = useState(false);
    const lista = mostrarMaiores ? maiores : pessoas;
    return (
        <main>
            <div className="flex gap-4">
                <h1 className="text-xl text-white">Lista de maior de idade</h1>
                <button className="bg-sky-600 text-white rounded-md p-2 cursor-pointer" onClick={()=> setMostrarMaiores(!mostrarMaiores)}>Maiores de idade</button>
            </div>
            <ul>
                {lista && lista.map(item => (
                    <li key={item.id}>{item.nome} - {item.idade} anos</li>
                ))}
            </ul>
        </main>
    )
}
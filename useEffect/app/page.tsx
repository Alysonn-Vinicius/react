'use client'
import { useEffect, useState } from "react";
import { VideoPlayer } from "./components/videoplayer";
import { Clean } from "./components/cleanUp";
import { Contador } from "./components/contador";
import { Crono } from "./components/cronometro";

export default function Home() {
  //treino outro
  {/*const [nome, setNome] = useState('Pedro')
  const [openMod, setOpenM] = useState(false)
  const [idade, setIdade] = useState(90);
  const [player, setPlayer] = useState(false);
  useEffect(() => {
    console.log('Rodou o EFFECT!!!')
  }, [nome])*/}


  const [count, setCount] = useState(0)
  const [vdd, setVdd] = useState(false);
  return (
    <>
    
    <div className="container mx-auto p-4 text-xl">
     {/* {openMod && <Clean />}

      <button className="border-2 border-gray-900 p-2" onClick={()=> {setOpenM(!openMod)}}>open</button>
      

      <p>Este é o uso do effect, meu nome é {nome}</p>
      <button onClick={() => setNome('Alysonn')} className="border border-blue-600 p-2 rounded-xl hover:bg-blue-600 hover:text-white">Trocar Alysonn</button>
      <button onClick={() => setNome('Vinicius')} className="border border-blue-600 p-2 rounded-xl hover:bg-blue-600 hover:text-white">Trocar Vinicius</button>
      <button className="border-2 border-gray-900 p-2" onClick={()=> {setOpenM(!openMod)}}>open</button>
      

      <button onClick={() => setIdade(30)} className="border border-red-600 p-2 rounded-xl hover:bg-red-600 hover:text-white">{idade}</button>
      <button onClick={() => setIdade(18)} className="border border-red-600 p-2 rounded-xl hover:bg-red-600 hover:text-white">{idade}</button>

      <hr />

      <VideoPlayer src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" isPlaying={player}/>
      <p>{player? 'Rodando': 'Pausado'}</p>
      <button onClick={()=> setPlayer(!player)} className="border p-2 border-blue-600">Play</button>*/}
    </div>

    <Contador numero={count} onclick={()=> {setCount(prev => prev +1)}}/>

      <button onClick={()=>{setVdd(!vdd)}}>iniciar</button>
      {vdd && <Crono />

      }

    </>
  );
}

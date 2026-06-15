'use client'

import { useState } from "react";

const Home = () => {
    const [count, setCount] = useState(0)

    const handleCount = (n:number) => {
        setCount(count + 1);
        console.log(count)
    }

    const [showArea,setShowArea] = useState(false);

    const [nomeInput, setNomeInput] = useState('');

    return (
        <main className="container mx-auto bg-slate-800 flex justify-center items-center h-screen flex-col gap-7">
           <div className="flex flex-col gap-0">
                {count}
                <button onClick={() => handleCount(count)} className="bg-blue-600 text-white p-2 rounded-md cursor-pointer">+1</button>
           </div> 


            <button className="p-3 bg-sky-600 text-white border border-white rounded-md cursor-pointer" onClick={()=> setShowArea(!showArea)}>{showArea ? 'Ocultar' : 'Mostrar'} area oculta</button>

            {showArea && 
            <div className="p-3 bg-sky-600 text-white border border-white rounded-md ">
                    <h3>Area secreta</h3>
            </div>
           }



           <div>
                <h3 className="text-xl">State em Campos: "inputs"</h3>
                <input type="text"
                placeholder="digite seu nome"
                className="border p-2 bg-gray-500"
                value={nomeInput} //nome fica com o valor da variavel
                onChange={e => setNomeInput(e.target.value)}
                //setando o valor na variavel atraves do state
                />

                <div>
                    o que esta sendo digitado: <br /> 
                    { nomeInput}
                </div>
           </div>

        </main>
    );
}

export default Home;
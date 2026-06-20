
'use client'
import { TodoItem } from "@/src/types/TodoItem";
import { FormEvent, useState } from "react";


export default function Home() {

    const [nomeInput, setNomeInput] = useState('');

    const [userInput, setUserInput] = useState('');
    const [userTel, setUserTel] = useState('');


    const [user, setUsers] = useState([
        {id: 1, name: 'Alysonn', tel: '99988344089'},
    ])

    const [listTarefa, setListTarefa] = useState<TodoItem[]>([
        { id: 1, label: "Fazer bolo", check: false },
        { id: 2, label: "Comprar bateria", check: false }
    ])

    //adiciona item ao array
    const handleAdicionar = () => {
        if (nomeInput.trim() === "") {
            alert('Campo em branco!')
            return;
        }
        setListTarefa([...listTarefa, { id: listTarefa.length + 1, label: nomeInput, check: false }])
        setNomeInput('');
    }

    //deleta item
    const handleDelete = (id: number) => {
        setListTarefa(
            listTarefa.filter(item => item.id !== id)//assim apenas os que sõ index diferentes, vão passar pra nova lista e atulizar state.
        );
    }

    //altera o check
    const toggleItem = (id: number) => {
        setListTarefa(
            listTarefa.map(item => {
                if (item.id === id) {
                    return { ...item, check: !item.check }
                }
                return item;
            })
        )
    }

    


    return (
        <div className="w-screen h-screen flex flex-col items-center text-2xl">
            <h1 className="text-4xl mt-5">Lista de Tarefas</h1>

            <div className="flex w-full max-w-xl my-3 p-4 rounded-md bg-gray-700 border-2 border-gray-500">


                <input type="text"
                    placeholder="O que deseja fazer?"
                    className="flex-1 border border-black p-3 text-2xl text-black rounded-md mr-3 bg-white"
                    value={nomeInput}
                    onChange={(e) => setNomeInput(e.target.value)}
                />
                <button className="cursor-pointer" onClick={handleAdicionar}>adicionar</button>
            </div>

            <p className='my-3 text-center'>{listTarefa.length} itens</p>

            <ul className="w-full max-w-full list-disc pl-96">
                {listTarefa.map((item, index) => (
                    <li key={index}>
                        <input type="checkbox" className="w-5 h-5 mr-3" checked={item.check} onClick={() => toggleItem(item.id)} />
                        {item.label} - <button className="hover:underline cursor-pointer" onClick={() => handleDelete(item.id)}>[ deletar ]</button>
                    </li>
                ))}

            </ul>

            <div>
                {/**Vamos com um formulário simples de cadastro de cliente, só com nome e telefone por enquanto (depois a gente expande pra veículo). Tenta montar sozinha:
                Os dois states com useState (pode ser um state por campo, ou um objeto único — sua escolha)
                Os dois inputs com value e onChange
                Um <button> que, ao clicar, só dá um console.log mostrando os dados preenchidos */}
                <form onSubmit={(e)=> {
                    e.preventDefault();
                    if(userInput.trim() !== '' && userTel.trim() !== ''){
                        setUsers(
                            [...user, {id: user.length+1, name: userInput, tel: userTel}]
                        )
                        setUserInput('')
                        setUserTel('')
                    }   
                    
                }}>
                    <input type="text"
                    placeholder="digite seu nome"
                    value={userInput}
                    onChange={e=> setUserInput(e.target.value)}
                    />

                    <input type="text"
                    placeholder="digite seu telefone"
                    value={userTel}
                    onChange={e=> setUserTel(e.target.value)}
                    />
                    <button>enviar</button>
                </form>

                <div>
                    {user.map(item => (
                        <li key={item.id}> {item.name} - {item.tel}</li>
                    ))}
                </div>
            </div>
        </div>
    );
}

'use client'
import { TodoItem } from "@/src/types/TodoItem";
import { useState } from "react";


export default function Home() {

    const [nomeInput, setNomeInput] = useState('');

    const [listTarefa, setListTarefa] = useState<TodoItem[]>([
        { id: 1, label: "Fazer bolo", check: false },
        { id: 2, label: "Comprar bateria", check: false }
    ])

    //treino
    const [produtos, setProdutos] = useState([
        { id: 1, nome: "Camiseta", emEstoque: true },
        { id: 2, nome: "Calça", emEstoque: false },
        { id: 3, nome: "Tênis", emEstoque: true },
    ])
    //Sua tarefa: crie uma função toggleEstoque(id: number) que inverte o emEstoque do produto clicado — igual ao que você fez com o check.
    const toggleEstoque = (id: number) => {
        setProdutos(
            produtos.map(item => {
                if (item.id === id) {
                    return { ...item, emEstoque: !item.emEstoque }
                }
                return item;
            })
        )
    }

    //treino 02
    const [usuarios, setUsuarios] = useState([
        { id: 1, nome: "Ana", ativo: true },
        { id: 2, nome: "Bruno", ativo: true },
        { id: 3, nome: "Carol", ativo: false },
    ])
    //Sua tarefa: crie uma função desativarTodos() — sem parâmetros — que coloca ativo: false em todos os usuários de uma vez. A diferença aqui é que não tem if checando o id, você vai alterar todos os itens do array. Pensa em como o .map() se comporta quando você não precisa filtrar nenhum item específico.

    const DesativaTodos = () => {
        setUsuarios(
            usuarios.map(item => ({ ...item, ativo: false }))
        )
    }

    //treino 03
    const [tarefas, setTarefas] = useState([
        { id: 1, titulo: "Estudar React", concluida: false },
        { id: 2, titulo: "Fazer exercício", concluida: false },
        { id: 3, titulo: "Ler um livro", concluida: true },
    ])
    //Sua tarefa: crie uma função concluirTodas() que coloca concluida: true em todas as tarefas.

    const concluirTodas = () => {
        setTarefas(
            tarefas.map(item => ({ ...item, concluida: true }))
        )
    }

    //exercicio 04
    const [carrinho, setCarrinho] = useState([
        { id: 1, produto: "Teclado", quantidade: 1 },
        { id: 2, produto: "Mouse", quantidade: 2 },
        { id: 3, produto: "Monitor", quantidade: 1 },
    ])
    //Sua tarefa: crie uma função incrementar(id: number) que aumenta a quantidade em +1 do item clicado.
    //A diferença aqui é que em vez de inverter um booleano, você vai trabalhar com número. Pensa em como pegar o valor atual e somar 1.

    const incrementar = (id: number) => {
        setCarrinho(
            carrinho.map(item => {
                if (item.id === id) {
                    return { ...item, quantidade: item.quantidade + 1 }
                }
                return item;
            })
        )
    }

    //exercicio 04
    //Esse tem duas etapas, presta atenção:
    const [jogadores, setJogadores] = useState([
        { id: 1, nome: "Ana", pontos: 10, ativo: true },
        { id: 2, nome: "Bruno", pontos: 5, ativo: false },
        { id: 3, nome: "Carol", pontos: 8, ativo: true },
    ])
    //Sua tarefa: crie uma função pontuar(id: number) que só adiciona +1 ponto se o jogador estiver ativo: true. Se estiver inativo, não faz nada.

    const pontuar = (id: number) => {
        setJogadores(
            jogadores.map(item => {
                if (item.id === id && item.ativo) {
                    return { ...item, pontos: item.pontos + 1 }
                }
                return item;
            })

        )
    }

    //exerciicio
    const [times, setTimes] = useState([
        { id: 1, nome: "Time A", pontos: 10, vencedor: false },
        { id: 2, nome: "Time B", pontos: 15, vencedor: false },
        { id: 3, nome: "Time C", pontos: 8, vencedor: false },
    ])
    //Sua tarefa: crie uma função definirVencedor(id: number) que marca vencedor: true no time clicado e garante que todos os outros ficam com vencedor: false.

    const definirVencedor = (id: number) => {
        setTimes(
            times.map(item => ({ ...item, vencedor: item.id === id }))
        )
    }

    //exercicio
    const [notificacoes, setNotificacoes] = useState([
        { id: 1, mensagem: "Novo comentário", lida: false },
        { id: 2, mensagem: "Novo seguidor", lida: true },
        { id: 3, mensagem: "Mensagem recebida", lida: false },
        { id: 4, mensagem: "Atualização disponível", lida: true },
    ])
    //Sua tarefa: crie uma função limparLidas() que remove do array todas as notificações com lida: true. Você já usou .filter() antes — pensa em como ele decide o que fica e o que sai!

    const limparLidas = () => {
        setNotificacoes(notificacoes.filter(item => !item.lida));
    }

    ///exercicio
    const [pedidos, setPedidos] = useState([
        { id: 1, produto: "Pizza", quantidade: 2, entregue: false },
        { id: 2, produto: "Hamburguer", quantidade: 1, entregue: true },
        { id: 3, produto: "Sushi", quantidade: 3, entregue: false },
    ])
    //Sua tarefa: crie duas funções:
    //entregarPedido(id: number) — marca entregue: true no pedido clicado. limparEntregues() — remove todos os pedidos com entregue: true
    const entregarPedido = (id: number) => {
        
    }


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


            <div className="my-5 border-t-2 border-white w-full text-center"></div>
            <div>
                {produtos.map((produto) => (
                    <div key={produto.id}>
                        {produto.nome} — {produto.emEstoque ? "✅ em estoque" : "❌ sem estoque"}
                        <button onClick={() => toggleEstoque(produto.id)} className="mx-2 bg-blue-400 p-2 rounded-md cursor-pointer"> alternar</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

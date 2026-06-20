//treino
import { useState } from "react"

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
    //entregarPedido(id: number) — marca entregue: true no pedido clicado. 
    //limparEntregues() — remove todos os pedidos com entregue: true
    const entregarPedido = (id: number) => {
        setPedidos(
            pedidos.map(item => {
                if (item.id === id) {
                    return { ...item, entregue: true }
                }
                return item;
            })
        )
    }
    const limparEntregues = () => {
        setPedidos(pedidos.filter(item => !item.entregue))
    }

    //exercicios
    const [alunos, setAlunos] = useState([
        { id: 1, nome: "Ana", nota: 4, aprovado: false },
        { id: 2, nome: "Bruno", nota: 8, aprovado: false },
        { id: 3, nome: "Carol", nota: 6, aprovado: false },
        { id: 4, nome: "Diego", nota: 3, aprovado: false },
    ])
    //calcularAprovado() que marca aprovado: true em todos os alunos com nota >= 6 e aprovado: false nos demais
    const calcularAprovado = () => {
        setAlunos(
            alunos.map(item => ({ ...item, aprovado: item.nota >= 6 }))
        )
    }

    //exercicios
    const [funcionarios, setFuncionarios] = useState([
        { id: 1, nome: "Ana", salario: 2000, cargo: "vendedor" },
        { id: 2, nome: "Carol", salario: 3000, cargo: "gerente" },
        { id: 3, nome: "Diego", salario: 2500, cargo: "vendedor" },
        { id: 4, nome: "Diego", salario: 4000, cargo: "gerente" },
    ])
    //crie uma funcao darAumento() que aumenta o slario em +500 apensa dos funcionarios com cargo === gerente
    const darAumento = () => {
        setFuncionarios(
            funcionarios.map(item => {
                if (item.cargo === 'gerente') {
                    return { ...item, salario: item.salario + 500 }
                }
                return item;
            })
        )

        setFuncionarios(
            funcionarios.map(item => (item.cargo === 'gerente' ? { ...item, salario: item.salario + 500 } : item))
        )
    }


    //exercicios
    const [vendas, setVendas] = useState([
        { id: 1, vendedor: "Ana", valor: 1000, paga: false },
        { id: 2, vendedor: "Bruno", valor: 1500, paga: true },
        { id: 3, vendedor: "Carol", valor: 2200, paga: false },
        { id: 4, vendedor: "Eduardo", valor: 800, paga: false },
        { id: 5, vendedor: "Alysonn", valor: 3000, paga: false },
    ])
    const pagarVendedor = (vendedor: string) => {
        setVendas(
            vendas.map(item => (item.vendedor === vendedor ? { ...item, paga: true } : item))
        )
    }

    //exercicios
    //Vamos com um formulário simples de cadastro de cliente, só com nome e telefone por enquanto (depois a gente expande pra veículo). Tenta montar sozinha: Os dois states com useState (pode ser um state por campo, ou um objeto único — sua escolha),Os dois inputs com value e onChange. Um <button> que, ao clicar, só dá um console.log mostrando os dados preenchidos

   /* export default Home = () => {
        return (
            <div className="my-5 border-t-2 border-white w-full text-center"></div>
            <div>
                {produtos.map((produto) => (
                    <div key={produto.id}>
                        {produto.nome} — {produto.emEstoque ? "✅ em estoque" : "❌ sem estoque"}
                        <button onClick={() => toggleEstoque(produto.id)} className="mx-2 bg-blue-400 p-2 rounded-md cursor-pointer"> alternar</button>
                    </div>
                ))}
            </div>
        );
    }
*/
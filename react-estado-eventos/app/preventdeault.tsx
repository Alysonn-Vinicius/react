'use client'


const Home = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert('Opa, mandando...')
    }

    const games = [
  { id: 1, nome: "GTA V", online: true },
  { id: 2, nome: "The Witcher 3", online: false },
  { id: 3, nome: "Fortnite", online: true }
];
    return (
        <main className=" h-screen w-screen flex items-center justify-center flex-col">  
        <h1>Teste de input</h1>
            <div className="w-md h-md p-5 border  flex justify-center items-center">
                <form action="" className="flex flex-col gap-2" onSubmit={(e)=> {e.preventDefault(); alert("ola")}}>
                    Email: <br />
                    <input type="text" placeholder="Digite texto aqui" className="border border-gray-600 p-2" /> 
                    <button className="bg-blue-500 text-white rounded-md p-2 cursor-pointer">Enviar</button>
                </form>
                    <div>
                        {games.filter((item) => item.online === true).map(n => (
                            <button key={n.id} onClick={()=> alert(`você clicou em ${n.nome}`)}>{n.nome}</button>
                        ))}
                </div>
            </div>

        </main>
    );
}


export default Home;
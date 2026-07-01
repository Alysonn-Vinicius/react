type Props ={
    nomeVar:string,
    setNome:(valor:string)=>void;
    onAdd:(valor:string)=> void;
}
export const Input = ({nomeVar, setNome, onAdd}:Props) =>{
    return (
        <div className="w-full flex gap-3">
        <input
            type="text"
            placeholder="Digite o nome do aluno"
            className="flex-1 border border-gray-700 outline-none rounded-md px-2 py-1 text-sm bg-gray-500"
            value={nomeVar}
            onChange={e => setNome(e.target.value)}
        />
        <button className="bg-blue-600 rounded-md px-3 py-2 hover:opacity-80 cursor-pointer text-white" onClick={() => onAdd(nomeVar)}>+ Adicionar</button>
    </div>
);
}
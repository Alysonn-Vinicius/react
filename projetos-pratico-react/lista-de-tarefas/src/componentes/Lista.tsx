type Props = {
    listaTarefas: Tarefa[];
    handle: (id: number) => void;
    handleConcluir: (id: number) => void;
}

export const Lista = ({ listaTarefas, handle, handleConcluir }: Props) => {
    return (
        <div className="flex flex-col">
            <h3 className="font-bold border-b border-gray-600 mb-2">Tarefas</h3>
            <ul className="space-y-2">
                {
                    listaTarefas.map(item => (
                        <li className={`px-2 py-3 rounded-md flex justify-between items-center transition-all ${item.concluida? 'bg-green-900': 'bg-gray-700 hover:bg-gray-600'}`} key={item.id}>
                            <div className="flex gap-2 justify-center items-center">
                                <input type="checkbox" className="w-5 h-5 accent-green-500 text-white cursor-pointer" checked={item.concluida}
                                    onChange={() => handleConcluir(item.id)} />
                                <span className={item.concluida ? 'line-through text-gray-400' : ''}>{item.nome}</span>
                            </div>
                            <button className={`p-1 cursor-pointer rounded-md hover:bg-gray-800 active:bg-red-800 ${item.concluida ?'hidden' : ''}`} onClick={() => handle(item.id)}>❌</button></li>
                    ))
                }

            </ul>
        </div>
    );
}
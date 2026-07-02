import { RiDeleteBin2Line } from "react-icons/ri";
type Props ={
    nome?:string,
    handleCancel: () => void;
    handleDelete: ()=> void;
}

export const DeleteModal = ({nome, handleDelete, handleCancel }:Props) => {
    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md text-center">
                <div className="w-105 rounded-2xl border border-zinc-700 bg-[#171C25]/80 backdrop-blur-sm p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-200 flex flex-col gap-3">
                    <span className="flex justify-center rounded-full border-red-500">
                        <RiDeleteBin2Line className="text-red-500" size={50} />
                    </span>
                    <strong>Excluir Aluno</strong>
                    <p className="text-gray-400 text-md w-xs font-bold">Tem certeza que deseja excluir <span className="text-red-500">{nome}</span> da lista?</p>
                    <div className="flex justify-around items-center gap-2">
                        <button className="border bg-gray-500 border-gray-600 text-white p-2 font-bold rounded-md text-md w-xs cursor-pointer hover:opacity-70" onClick={handleCancel}>Cancelar</button>
                        <button className="bg-red-500 text-white p-2 font-bold rounded-md text-md w-xs cursor-pointer hover:opacity-70" onClick={handleDelete}>Excluir</button>
                    </div>
                </div>
            </div>
        </>
    );
}
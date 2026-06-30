
import { RiDeleteBin6Line, RiGraduationCapLine, RiMailLine } from 'react-icons/ri';
type Props = {
    array: Aluno[],
    onclick: (id: number) => void;
    handleCheck: (id:number) => void;
}
export const ListItem = ({ array, onclick, handleCheck }: Props) => {
    return (
        <>
            {array.map(item => (
                <div className="flex justify-between items-center border border-gray-600 rounded-md px-3 py-2 bg-gray-600 text-gray-300 my-2">
                    <div className="flex justify-center items-center gap-8" key={item.id}>
                        <input type="checkbox"
                            className='w-6 h-6'
                            checked={item.aprovado}
                            onClick={()=> handleCheck(item.id)}
                        />
                        <div>{item.nome}</div>
                    </div>
                    <div className='flex gap-10 items-center '>
                        {
                            item.aprovado
                            &&
                            <div className=' transition-all bg-green-200 text-green-500 font-bold px-2 py-1 rounded-md'>
                                Aprovado
                            </div>
                        }
                        {
                            !item.aprovado
                            &&
                            <div className='border border-gray-100 font-bold px-2 py-1 rounded-md'>
                                Reprovado
                            </div>
                        }

                        <button className='cursor-pointer bg-red-700 p-2 rounded-md' onClick={() => onclick(item.id)}>
                            <RiDeleteBin6Line color='#FFFFFF' size={18} />
                        </button>
                    </div>
                </div>

            ))}
        </>

    );
}
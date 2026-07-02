
import { RiDeleteBin6Line, RiGraduationCapLine, RiMailLine } from 'react-icons/ri';
type Props = {
    array: Aluno[],
    onclick: (id: number) => void;
}
export const ListItem = ({ array, onclick }: Props) => {
    return (
        <>
            {array.map(item => {
                const media = ((item.nota1 + item.nota2 + item.nota3 + item.nota4) / 4) || 0;
                const mediaStr = media.toFixed(2);
                const mediaOk = media >= 7;
                return (
                    
                <div key={item.id} className="flex  justify-between items-center border border-gray-700/40 rounded-xl px-5 py-4 bg-white/5 backdrop-blur-sm text-gray-200 my-3 shadow-md">

                    <div className="flex items-center md:gap-4">
                        <div className={`rounded-full shadow  ${item.aprovado ? 'bg-green-500' : 'bg-red-500'} w-8 h-8 flex items-center justify-center text-sm font-bold text-gray-100`}>
                            {item.nome.charAt(0).toUpperCase()}
                        </div>
                        <div className="font-medium text-gray-100 truncate">{item.nome}</div>
                    </div>

                    <div className="flex gap-3 items-center">
                        <div className='flex flex-col items-center bg-transparent border border-gray-600/60 rounded-md px-3 py-1 w-14'>
                            <div className='text-[10px] text-gray-400'>N1</div>
                            <div className='text-cyan-300 font-semibold text-sm'>{item.nota1}</div>
                        </div>
                        <div className='flex flex-col items-center bg-transparent border border-gray-600/60 rounded-md px-3 py-1 w-14'>
                            <div className='text-[10px] text-gray-400'>N2</div>
                            <div className='text-cyan-300 font-semibold text-sm'>{item.nota2}</div>
                        </div>
                        <div className='flex flex-col items-center bg-transparent border border-gray-600/60 rounded-md px-3 py-1 w-14'>
                            <div className='text-[10px] text-gray-400'>N3</div>
                            <div className='text-cyan-300 font-semibold text-sm'>{item.nota3}</div>
                        </div>
                        <div className='flex flex-col items-center bg-transparent border border-gray-600/60 rounded-md px-3 py-1 w-14'>
                            <div className='text-[10px] text-gray-400'>N4</div>
                            <div className='text-cyan-300 font-semibold text-sm'>{item.nota4}</div>
                        </div>

                        {/* Visual da Média (apenas exibição) */}
                        <div className={`flex flex-col items-center rounded-md px-3 py-1 w-20 ${mediaOk ? 'bg-green-900/30 border border-green-700' : 'bg-red-900/20 border border-red-700/40'}`}>
                            <div className='text-[10px] text-gray-300'>Média</div>
                            <div className={`${mediaOk ? 'text-green-300' : 'text-red-300'} font-bold text-sm`}>{mediaStr}</div>
                        </div>
                    </div>

                    <div className='flex gap-4 items-center'>
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
                );

            })}
        </>

    );
}
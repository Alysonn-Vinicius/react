import { RiDeleteBin6Line, RiGraduationCapLine, RiMailLine } from 'react-icons/ri';

export default function Home() {
  return (
    <div className="w-screen h-screen p-4 flex justify-center items-center">
      <section className="container mx-auto w-full max-w-lg bg-gray-900 rounded-md p-4 flex flex-col gap-3">{/**main */}

        <div className="flex items-center gap-5"> {/**header */}
          <div>
            <RiGraduationCapLine size={62} />
          </div>
          <div>
            <h1 className="font-bold text-xl text-white">Sistema de Alunos</h1>
            <div className="text-sm text-gray-500">Adicione alunos e gerencie seus status de aprovação</div>
          </div>
        </div>

        {/**input */}
         <div className="w-full flex gap-3">
            <input type="text" placeholder="Digite o nome do aluno" className="flex-1 border border-gray-700 outline-none rounded-md px-2 py-1 text-sm bg-gray-950" />
            <button className="bg-blue-600 rounded-md px-3 py-2 hover:opacity-80 cursor-pointer text-white">+ Adicionar</button>
          </div>

        <div className='bg-gray-800 p-2 rounded-md w-full flex flex-col gap-3 '>
          <div>
            <div>{/*area grande */}
              <div className="flex justify-around gap-2"> {/*area 3 botoes */}
                <button className="border border-gray-700 px-8 py-2 rounded-md hover:bg-blue-600 cursor-pointer transition-all bg-gray-700 flex-1">Todos</button>
                <button className="border border-gray-700 px-8 py-2 rounded-md hover:bg-blue-600 cursor-pointer transition-all bg-gray-700 flex-1">Aprovados</button>
                <button className="border border-gray-700 px-8 py-2 rounded-md hover:bg-blue-600 cursor-pointer transition-all bg-gray-700 flex-1">Reprovados</button>
              </div>
            </div>
            <h4 className="text-xl my-2">Alunos</h4>
            <div className="flex justify-between items-center border border-gray-600 rounded-md px-3 py-2 bg-gray-950">
              <div className="flex justify-center items-center gap-8">
                <input type="checkbox" className='w-6 h-6' />
                <div>Nome</div>
              </div>
              <button className='cursor-pointer bg-red-700 p-2 rounded-md'>
                <RiDeleteBin6Line color='#FFFFFF' size={18} />
              </button>
            </div>
          </div>
          <aside className='grid gap-2 grid-cols-3'>
            <div className='border border-gray-700 p-4 rounded-md'>
              <div className='text-gray-500 font-bold text-md'>Todos</div>
            </div>
            <div className='border border-gray-700 p-4 rounded-md'>
              <div className='text-gray-500 font-bold text-md'>Aprovados</div>
            </div>
            <div className='border border-gray-700 p-4 rounded-md'>
              <div className='text-gray-500 font-bold text-md'>Reprovados</div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

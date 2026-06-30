type Props = {
  alunos: Aluno[];
  alunosAprovados: Aluno[];
  alunosReprovados: Aluno[];
}
export const GridCom = ({alunos, alunosAprovados, alunosReprovados}:Props) => {
    return(
        <article className='grid gap-2 grid-cols-3'>
            <div className='border border-gray-700 p-4 rounded-md flex flex-col'>
              <div className='text-gray-500 font-semibold text-sm'>Total de alunos</div>
              <div className="flex justify-between items-center ">
                <div className="font-bold text-2xl text-blue-600">{alunos.length}</div>
                <div>img</div>
              </div>
            </div>
            <div className='border border-gray-700 p-4 rounded-md'>
              <div className='text-gray-500 font-semibold text-sm'>Aprovados</div>
              <div className="flex justify-between items-center ">
                <div className="font-bold text-2xl text-green-600">{alunosAprovados.length}</div>
                <div>img</div>
              </div>
            </div>
            <div className='border border-gray-700 p-4 rounded-md'>
              <div className='text-gray-500 font-semibold text-sm'>Reprovados</div>
              <div className="flex justify-between items-center ">
                <div className="font-bold text-2xl text-red-700">{alunosReprovados.length}</div>
                <div>img</div>
              </div>
            </div>
        </article>
    );
}
export const gridCom = () => {
    return(
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
    );
}
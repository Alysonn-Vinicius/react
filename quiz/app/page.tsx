'use client'
import { produtos } from '@/src/data/produtos'
import { useState } from "react";


export default function Home() {
  const [carrinho, setCarrinho] = useState<Carrinho[]>([]);
  return (
    <div className="container mx-auto flex flex-col justify-center items-center h-screen">
      <div className='bg-gray-800  max-w-lg w-full p-3'>
        {produtos.map(item => (
          <div className='flex justify-between items-center my-2 p-2 border'>
              <div className='flex flex-col'>
                <span>{item.nome}</span>
                <span className='text-sm text-gray-400'>R${item.preco.toFixed(2)}</span>  
              </div>
              
              <button className='bg-blue-700 p-2 rounded-md cursor-pointer' 
              onClick={()=> {
                setCarrinho([...item, {id: item.id, nome:item.nome, preco: item.preco, quantidade: 1}])
              }}>
                Adicionar
              </button>
          </div>
        ))}
        itens no carrinho: {carrinho.length}
      </div>



    </div>
  );
}

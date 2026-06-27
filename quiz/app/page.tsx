'use client'
import { CartItem } from '@/src/componentes/cartItem';
import { ProductItem } from '@/src/componentes/productItem';
import type {Produto} from '@/src/types/produto'
import type {Carrinho} from '@/src/types/carrinho'
import { useState } from "react";
import { produtos } from '@/src/data/produtos';


export default function Home() {
  const [carrinho, setCarrinho] = useState<Carrinho[]>([]);

  const AdcItem = (item: Produto) => {
    let temItem = carrinho.find(car => car.id === item.id);
    if (temItem !== undefined) {
      setCarrinho(carrinho.map(car => car.id === item.id
        ? { ...car, qt: car.qt + 1 }
        : car))
    } else {
      setCarrinho([...carrinho, { id: item.id, nome: item.nome, preco: item.preco, qt: 1 }]);
    }
  }
  const removeItem = (produto: Carrinho) => {
    const remove = carrinho.filter(car => car.id !== produto.id)
    setCarrinho(remove)
  }
  const handleQtAdc = (produto: Carrinho) => {
    setCarrinho(carrinho.map(car => car.id === produto.id
      ? { ...car, qt: car.qt + 1 }
      : car))
  }
  const handleQtSub = (produto: Carrinho) => {
    if (produto.qt >= 2) {
      setCarrinho(carrinho.map(car => (car.id === produto.id) ? { ...car, qt: produto.qt - 1 } : car)) //se n for o id, retorna o item sem mexer
    } else{
       const remove = carrinho.filter(car => car.id !== produto.id)
      setCarrinho(remove)
    }
  }

  const total = carrinho.reduce((total, car) => total + (car.preco * car.qt), 0)
  return (
    <div className="container mx-auto flex flex-col justify-center items-center h-screen">
      <div className='bg-gray-800  max-w-lg w-full p-3'>
        <ProductItem handle={AdcItem} produtos={produtos}/>
        itens no carrinho: {carrinho.length}
        <CartItem array={carrinho} onAdd={handleQtAdc} onRemove={removeItem} onSub={handleQtSub}/> 

        <div className='border-t-2 my-2 pt-2'>
          Total: <strong>R$ {total.toFixed(2)}</strong>
        </div>
      </div>
    </div>
  );
}

import { Button } from "./button";
import {Carrinho} from '@/src/types/carrinho'
type Props = {
    onAdd:(item:Carrinho)=>void;
    onSub: (item:Carrinho)=> void;
    onRemove:(item:Carrinho)=>void;
    array: Carrinho[];
}

export const CartItem = ({onAdd, onRemove, onSub, array}:Props)=> {
    return(
        <>
        {array.map(item => (
          <div className='flex justify-between items-center gap-2' key={item.id}>
            <div>{item.nome} - R$ {item.preco.toFixed(2)} - <Button label={'-'} handle={() => onSub(item)} /> quantidade:{item.qt} <Button label='+' handle={() => onAdd(item)} /> </div>
            <Button handle={() => onRemove(item)} label='X' classname='text-red-600 hover:bg-red-500 hover:text-white bg-transparent' />
          </div>
        ))}
        
        </>
    );
}
import { Button } from "./button";
import type {Produto} from '@/src/types/produto'

type Props = {
    handle: (item: Produto)=> void,
    produtos:Produto[];
    
}
export const ProductItem = ({handle, produtos}:Props) => {
    return (
        <>
            {
                produtos.map(item => (
                    <div className='flex justify-between items-center my-2 p-2 border' key={item.id}>
                        <div className='flex flex-col' >
                            <span>{item.nome}</span>
                            <span className='text-sm text-gray-400'>R${item.preco.toFixed(2)}</span>
                        </div>

                        <div>
                            <Button handle={() => handle(item)} label='Adicionar' classname='p-2' />
                        </div>
                    </div>
                ))
            }
        </>
    );
}
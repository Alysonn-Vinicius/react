import { useReducer, useState } from "react";
import { Item } from "../types/item";
import { listReducer } from "./reducers/listReducer";


export const TesteReduce = () => {

    const [list, setList] = useState<Item[]>([])

    //adc
    const Adc = (text: string) => {
        setList([...list, {id: Date.now(), text, done:false}])
    }
    //toggleText
    const toggleItem = (id:number, newText:string) => {
        setList(
            list.map((item,index)=> {
                if(item.id === id){
                    item.text = newText;
                }
                return item;
            })
        )
    }

    //trocar done
    const toggleDone = (id:number) => {
        setList(
            list.map((item)=> {
                if(item.id === id){
                    item.done = !item.done;
                }
                return item;
            })
        )
    }

    //remove item
    const removeItem = (id:number) => {
        setList(list.filter(item => item.id !== id))
    }
    /**Reducer são feitos para reduzir, essas 3 funcoes servem para modificiar um unico state, reducer vem para minimizar ou deixar tudo em um unico lugar */


    //modo de uso do hook - Reducer
    const [liste, dispatch] = useReducer(listReducer, [])
    const handleClick = () => {
        dispatch({
            type: 'add',
            payload: 'novo item'
        });

        dispatch({
            type:"EditText",
            payload: {id: 5, newText: 'novotext'}
        })
    }
    return (
        <div>
            <button onClick={handleClick}></button>
        </div>
    );
}
import { useReducer } from "react";

export const Contador = () => {
    const init = {
        n:0
    }

    type State = {
        n:number
    }
    
    type Actions = {type: "increment", payload?: number} | {type: "decrement", payload?: number} | {type: "reset"} ;

    function reducer (state:State, actions: Actions){
        switch(actions.type){
            case 'increment':
                return {n: state.n + (actions.payload ?? 1)}
            
            case 'decrement':
                if(state.n >= (actions.payload ?? 1)){
                    return {n: state.n - (actions.payload ?? 1)}   
                } else{
                    return {n: 0}
                }
            case "reset": return {n: 0};

            default: return {n: 0};
        }
    }
    const [state, dispatch] = useReducer(reducer, init);
   
    return (
        <div className="container mx-auto bg-sky-950 w-64 h-64 rounded-md p-6">
            <div className="flex gap-2 justify-center items-center">
                <button className="border p-2 rounded-md cursor-pointer hover:bg-red-600 hover:text-white" onClick={()=> dispatch({type:'decrement'})}>-</button>
                <span>{state.n}</span>
                <button className="border p-2 rounded-md cursor-pointer hover:bg-green-600 hover:text-white" onClick={()=> dispatch({type:'increment'})}>+</button>
            </div>
            <button className="p-2 border" onClick={()=> {dispatch({type:"reset"})}}>Reset</button>
        </div>
    );
}
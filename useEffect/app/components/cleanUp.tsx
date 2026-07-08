import { useEffect, useState } from "react";

export const Clean = ()=> {

    const [contador, setContador] = useState(0);
    useEffect(()=> {
        console.log('rodou o effect, valor: ', contador);

        return () => {
            console.log('fechou com o cleanUp, valor: ', contador)
        }
    })
    return(
        <div>
            Clean op
            <button className="p-2 border border-blue-600" onClick={()=>{setContador(contador + 1)}}>click</button>
        </div>
    );
}
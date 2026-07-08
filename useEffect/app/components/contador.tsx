import { useEffect } from "react";

type Props = {
    onclick:()=>void,
    numero: number
}
export const Contador = ({onclick,numero}:Props)=> {
    useEffect(()=> {
        document.title = `clicou ${numero} vezes`;
    }, [numero])
    return (
        <div className="container mx-auto">
            <div>{numero}</div>
            <button onClick={onclick}>Incrimetar</button>
        </div>
    );
}
import { useContext } from "react"
import { CountContext } from "../contexts/countContex"

export const Subtitulo = () => {
    const countCtx = useContext(CountContext)
    
    
    return (
        <div className="flex flex-col">
            <p>
                titulo da página
           </p> 
        </div>

    );
}
import { useEffect, useState } from "react";

export const Crono = () => {
    const [segundo, setSegundo] = useState(0);

    useEffect(()=> {
        const intervalo = setInterval(()=>{
            setSegundo(prev=> prev + 1)
        }, 1000)


        //cleanUp
        return () => {
            console.log('limpou o clean up')
            clearInterval(intervalo);
        }
    }, [])
    return(
        <div className="container flex items-center justify-center">segundos...: {segundo}</div>  
    );
}
import { useEffect, useState } from "react";

export const Crono = () => {
    const [segundo, setSegundo] = useState(0);
    const [rodando, setRodando] = useState(true);

    useEffect(() => {
        if (rodando) {
            const intervalo = setInterval(() => {
                setSegundo(prev => prev + 1)
            }, 1000)
             //cleanUp
        return () => {
            console.log('limpou o clean up')
            clearInterval(intervalo);
        }
        }
    }, [rodando])
    return (
        <>
            <div className="container flex items-center justify-center">segundos...: {segundo}</div>
            <button onClick={() => { setRodando(!rodando) }}>{rodando ? "Pause" : "Rodando"}</button>
        </>


    );
}
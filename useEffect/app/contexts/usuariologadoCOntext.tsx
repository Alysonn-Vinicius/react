import { createContext, ReactNode, useState } from "react";

type ContextType = {
    nome: string
    setNome: (nome:string) => void;
}
type Props ={children: ReactNode}

export const ContextNome = createContext<ContextType|null>(null);

export const UserLog = ({children}:Props) => {
    const [nome, setNome] = useState('Alysonn');
    return(
        <ContextNome value={{nome, setNome}}>
            {children}
        </ContextNome>
    );
}
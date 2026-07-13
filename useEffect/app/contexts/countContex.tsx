
import { createContext, ReactNode, useState } from "react";

type ContextType = {
    count: number
    setCount: (n:number) => void;
}


export const CountContext = createContext<ContextType|null>(null);


type Props = {children: ReactNode}
export const OrgContext = ({children}:Props) => {

    const [count, setCount] = useState(45);

    return(
        <CountContext.Provider value={{count, setCount}}>
            {children}
        </CountContext.Provider>
    );
}
import { useContext } from "react";

import { ContextNome } from "../contexts/usuariologadoCOntext";

export const Titulo = () => {
    const userContext = useContext(ContextNome);

    const handleOff = () => {
        userContext?.setNome('');
    }
    return(
        <>
            {
                userContext?.nome && 
                <>
                    <p>Usuario logado: <span>{userContext?.nome}</span></p>
                    <button className="bg-red-500 px-2 cursor-pointer" onClick={handleOff}>Sair</button>
                </>
            }
            {
              !userContext ||  userContext?.nome === "" && <><p>Usuario Deslogado</p></>
            }
        </>
       
    );
}
import { ButtonNav } from "./buttonNav";

type Props ={
    abaAtiva: "todos" | "aprovados" | "reprovados",
    setAba: (valor: "todos" | "aprovados" | "reprovados") => void
}
export const FilterTabs = ({abaAtiva, setAba}:Props)=>{
    return (
         <div>{/*area grande */}
              <div className="flex justify-around gap-2"> {/*area 3 botoes */}
                <ButtonNav label="todos" aba={abaAtiva === "todos"} onclick={() => { setAba("todos") }}/>
                
                <ButtonNav label="Aprovados" aba={abaAtiva === "aprovados"} onclick={() => { setAba("aprovados")}}/>
                <ButtonNav label="Reprovados" aba={abaAtiva === "reprovados"} onclick={() => {setAba('reprovados')}} />
                
              </div>
            </div>
    );
}
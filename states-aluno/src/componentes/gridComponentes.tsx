import { RiCheckboxCircleLine, RiCloseCircleLine, RiGroupFill } from "react-icons/ri";
import { CardRes } from "./cardResumo";

type Props = {
  alunos: Aluno[];
  alunosAprovados: Aluno[];
  alunosReprovados: Aluno[];
}
export const GridCom = ({alunos, alunosAprovados, alunosReprovados}:Props) => {
    return(
        <div className='grid gap-2 grid-cols-3'>
            <CardRes 
            Icone={RiGroupFill}
            label="Total de Alunos"
            quantidade={alunos.length}
            cor="text-blue-600"
            />
            <CardRes 
            label="Aprovados"
            quantidade={alunosAprovados.length}
            Icone={RiCheckboxCircleLine}
            cor="text-green-400"
            />
            
            <CardRes 
            label="Reprovados"
            quantidade={alunosReprovados.length}
            Icone={RiCloseCircleLine}
            cor="text-red-500"
            />
        </div>
    );
}
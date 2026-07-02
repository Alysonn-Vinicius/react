'use client'
import { DeleteModal } from '@/src/componentes/deletemoda';
import { FilterTabs } from '@/src/componentes/FilterTabs';
import { GridCom } from '@/src/componentes/gridComponentes';
import { Header } from '@/src/componentes/header';
import { ListItem } from '@/src/componentes/listItem';
import { useState } from 'react';
import { RiGraduationCapLine } from 'react-icons/ri';
import { FormInputs } from '@/src/componentes/formInputs';


export default function Home() {

  const [listAlunos, setListAlunos] = useState<Aluno[]>([
    //{ id: 1, nome: 'Alysonn Vinicius', aprovado: false },
    //{ id: 2, nome: 'Carol Morais', aprovado: true },
  ]);

  const alunosAprovados = listAlunos.filter(aluno => aluno.aprovado);
  const alunosReprovados = listAlunos.filter(aluno => !aluno.aprovado);

  //adicionar itens
  const handleAdc = (aluno:Aluno) => {
    const media = (aluno.nota1 + aluno.nota2 + aluno.nota3 + aluno.nota4) / 4;
    const aprovado = media >=7;
   setListAlunos([...listAlunos, { ...aluno, id: listAlunos.length + 1, aprovado }]);
  
  }
  //abrir modal p/excluir itens
  const openModal = (id: number) => {
    setAlunoParaExcluir(id);
  }
  //excluir item
  const handleDelete = (id: number) => {
    const removeAluno = listAlunos.filter(aluno => aluno.id !== id);
    setListAlunos(removeAluno);
    //depois de apagar, fechar modal
    setAlunoParaExcluir(null)
  }

  //trocar de abas
  const [abaAtiva, setAbaAtiva] = useState<"todos" | "aprovados" | "reprovados">("todos");

  const AlunosFiltrados = () => {
    if (abaAtiva === 'aprovados') return alunosAprovados;
    if (abaAtiva === 'reprovados') return alunosReprovados;
    return listAlunos;
  }

  //cancel
  const cancel = () => {
    setAlunoParaExcluir(null);
  }

  //open modal
  const [alunoParaExcluir, setAlunoParaExcluir] = useState<number | null>(null);
  const alunoSelecionado = listAlunos.find(a => a.id === alunoParaExcluir);


  return (
    <div className="w-screen h-screen p-4 flex justify-center items-center">
      <section className="container mx-auto w-full max-w-xl md:max-w-5xl bg-gray-900 rounded-md p-4 flex flex-col gap-3">{/**main */}

        <Header
        labelTitulo='Sistema de Alunos' 
        Icone={RiGraduationCapLine} 
        labelParagrafo='Adicione alunos e gerencie seus status de aprovação' 
        />      
        
        {/** */}
        <FormInputs onAdd={handleAdc}/>
        <div className='bg-gray-800/60 backdrop-blur-sm p-2 rounded-md w-full flex flex-col gap-3'>
          <div>
            <FilterTabs setAba={setAbaAtiva} abaAtiva={abaAtiva}/>
            {listAlunos.length >= 1 &&
              <>
                <h4 className="text-xl my-2 text-white">Alunos:</h4>

                <ListItem
                  array={AlunosFiltrados()}
                  onclick={openModal}
                />
              </>

            }
          </div>
        </div>
        <GridCom
          alunos={listAlunos}
          alunosAprovados={alunosAprovados}
          alunosReprovados={alunosReprovados}
        />
      </section>
      {
        alunoParaExcluir && <DeleteModal nome={alunoSelecionado?.nome} handleDelete={() => handleDelete(alunoParaExcluir)} handleCancel={cancel} />
      }
    </div>
    
  );
}

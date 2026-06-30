'use client'
import { GridCom } from '@/src/componentes/gridComponentes';
import { ListItem } from '@/src/componentes/listItem';
import { useState } from 'react';
import { RiDeleteBin6Line, RiGraduationCapLine, RiMailLine } from 'react-icons/ri';


export default function Home() {

  const [listAlunos, setListAlunos] = useState<Aluno[]>([
    { id: 1, nome: 'Alysonn Vinicius', aprovado: false },
    { id: 2, nome: 'Carol Morais', aprovado: true },
  ]);
  const [nomeInput, setNomeInput] = useState('');

  const alunosAprovados = listAlunos.filter(aluno => aluno.aprovado);
  const alunosReprovados = listAlunos.filter(aluno => !aluno.aprovado);

  //adicionar itens
  const handleAdc = (nome: string) => {
    setListAlunos(
      [...listAlunos, { id: listAlunos.length + 1, nome: nome, aprovado: false }]
    );
    setNomeInput("");
  }
  //remover itens
  const handleRemove = (id: number) => {
    const removeAluno = listAlunos.filter(aluno => aluno.id !== id);
    setListAlunos(removeAluno);
  }

  //trocar de abas
  const [abaAtiva, setAbaAtiva] = useState<"todos" | "aprovados" | "reprovados">("todos");

  const AlunosFiltrados = () => {
    if (abaAtiva === 'aprovados') return alunosAprovados;
    if (abaAtiva === 'reprovados') return alunosReprovados;
    return listAlunos;
  }


  //handle check
  const handleCheck = (id: number) => {
    setListAlunos(listAlunos.map(aluno => aluno.id === id ? { ...aluno, aprovado: !aluno.aprovado } : aluno))
  }

  return (
    <div className="w-screen h-screen p-4 flex justify-center items-center">
      <section className="container mx-auto w-full max-w-3xl bg-gray-900 rounded-md p-4 flex flex-col gap-3">{/**main */}
        <div className="flex items-center gap-5"> {/**header */}
          <div>
            <RiGraduationCapLine size={62} color={'#FFFFFF'} />
          </div>
          <div>
            <h1 className="font-bold text-xl text-white">Sistema de Alunos</h1>
            <div className="text-sm text-gray-500">Adicione alunos e gerencie seus status de aprovação</div>
          </div>
        </div>

        {/**input */}
        <div className="w-full flex gap-3">
          <input
            type="text"
            placeholder="Digite o nome do aluno"
            className="flex-1 border border-gray-700 outline-none rounded-md px-2 py-1 text-sm bg-gray-500"
            value={nomeInput}
            onChange={e => setNomeInput(e.target.value)}
          />
          <button className="bg-blue-600 rounded-md px-3 py-2 hover:opacity-80 cursor-pointer text-white" onClick={() => handleAdc(nomeInput)}>+ Adicionar</button>
        </div>

        <div className='bg-gray-800 p-2 rounded-md w-full flex flex-col gap-3'>
          <div>
            <div>{/*area grande */}
              <div className="flex justify-around gap-2"> {/*area 3 botoes */}
                <button className="border border-gray-700 px-8 py-2 rounded-md hover:bg-blue-600 cursor-pointer transition-all bg-gray-700 flex-1" onClick={() => { setAbaAtiva("todos") }}>
                  Todos {`(${(listAlunos.length)})`}
                </button>
                <button className="border border-gray-700 px-8 py-2 rounded-md hover:bg-blue-600 cursor-pointer transition-all bg-gray-700 flex-1" onClick={() => { setAbaAtiva("aprovados") }}  >
                  Aprovados {`(${alunosAprovados.length})`}
                </button>
                <button className="border border-gray-700 px-8 py-2 rounded-md hover:bg-blue-600 cursor-pointer transition-all bg-gray-700 flex-1" onClick={() => { setAbaAtiva("reprovados") }}>
                  Reprovados {`(${alunosReprovados.length})`}
                </button>
              </div>
            </div>
            {listAlunos.length >= 1 &&
              <>
                <h4 className="text-xl my-2 text-white">Alunos:</h4>

                <ListItem
                  array={AlunosFiltrados()}
                  onclick={handleRemove}
                  handleCheck={handleCheck} 
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
    </div>
  );
}

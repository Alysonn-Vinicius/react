import { useState } from "react";

type Props = {
    onAdd: (aluno: Aluno) => void;
}

export const FormInputs = ({ onAdd }: Props) => {
    const [alunoData, setAlunoData] = useState<Aluno>({ id: 0, nome: '', nota1: 0, nota2: 0, nota3: 0, nota4: 0, aprovado: false },);
    return (
        <>
            <div className="flex flex-wrap gap-2 bg-white/3 backdrop-blur-sm p-3 rounded-md w-full">
                <input
                    type="text"
                    placeholder="Digite o nome do aluno"
                    className="flex-1 border border-gray-700 outline-none rounded-md px-2 py-1 text-sm bg-gray-500"
                    value={alunoData.nome}
                    onChange={(e) => setAlunoData({ ...alunoData, nome: e.target.value })}
                />
                <input type="number"
                    name="nota1"
                    className=" border border-gray-700 outline-none rounded-md px-2 py-1 text-sm bg-gray-500 w-20 appearance-none"
                    placeholder="Nota 1"
                    value={alunoData.nota1 === 0 ? '' : alunoData.nota1}
                    onChange={(e) => {
                        const val = Math.min(10, Math.max(0, parseFloat(e.target.value) || 0));
                        setAlunoData({ ...alunoData, nota1: val });
                    }}
                    min={0}
                    max={10}
                    inputMode="decimal"
                />
                <input type="number"
                    name="nota2"
                    className=" border border-gray-700 outline-none rounded-md px-2 py-1 text-sm bg-gray-500 w-20 appearance-none"
                    placeholder="Nota 2"
                    value={alunoData.nota2 === 0 ? '' : alunoData.nota2}
                    onChange={(e) => {
                        const val = Math.min(10, Math.max(0, parseFloat(e.target.value) || 0));
                        setAlunoData({ ...alunoData, nota2: val });
                    }}
                    min={0}
                    max={10}
                    inputMode="decimal"
                />
                <input type="number"
                    name="nota3"
                    className=" border border-gray-700 outline-none rounded-md px-2 py-1 text-sm bg-gray-500 w-20 appearance-none"
                    placeholder="Nota 3"
                    value={alunoData.nota3 === 0 ? '' : alunoData.nota3}
                    onChange={(e) => {
                        const val = Math.min(10, Math.max(0, parseFloat(e.target.value) || 0));
                        setAlunoData({ ...alunoData, nota3: val });
                    }}
                    min={0}
                    max={10}
                    inputMode="decimal"
                    style={{ appearance: 'textfield' }}
                />
                <input type="number"
                    name="nota4"
                    className=" border border-gray-700 outline-none rounded-md px-2 py-1 text-sm bg-gray-500 w-20 appearance-none"
                    placeholder="Nota 4"
                    value={alunoData.nota4 === 0 ? '' : alunoData.nota4}
                    onChange={(e) => {
                        const val = Math.min(10, Math.max(0, parseFloat(e.target.value) || 0));
                        setAlunoData({ ...alunoData, nota4: val });
                    }}
                    min={0}
                    max={10}
                    inputMode="decimal"
                    style={{ appearance: 'textfield' }}
                />

                <button
                    className="bg-blue-600 rounded-md px-3 py-2 hover:opacity-80 cursor-pointer text-white"
                    onClick={() => {
                        if(alunoData.nome.trim() === '' || alunoData.nota1 === 0 || alunoData.nota2 === 0 || alunoData.nota3 === 0 || alunoData.nota4 === 0){
                            alert('Preencha todos os campos corretamente antes de adicionar o aluno.');
                            return;
                        }   
                        onAdd(alunoData)
                        setAlunoData({ id: 0, nome: '', nota1: 0, nota2: 0, nota3: 0, nota4: 0, aprovado: false })
                    }}
                >
                    + Adicionar
                </button>
            </div>

        </>

    );
}
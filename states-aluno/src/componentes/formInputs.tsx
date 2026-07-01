import { Input } from "./input";

export const FormInputs = () =>{
    return (
        <div className="flex gap-2">
            <input
            type="text"
            placeholder="Digite o nome do aluno"
            className="flex-1 border border-gray-700 outline-none rounded-md px-2 py-1 text-sm bg-gray-500"
        />
            <input type="number" name="nota1" className="flex-8/12 border border-gray-700 outline-none rounded-md px-2 py-1 text-sm bg-gray-500 w-20 appearance-none" placeholder="Nota 1" />
            <input type="number" name="nota2" className="flex-8/12 border border-gray-700 outline-none rounded-md px-2 py-1 text-sm bg-gray-500 w-20 appearance-none" placeholder="Nota 2" />
            <input type="number" name="nota3" className="flex-2/3 border border-gray-700 outline-none rounded-md px-2 py-1 text-sm bg-gray-500 w-20 appearance-none" placeholder="Nota 3" />
            <input type="number" name="nota4" className="flex-2/3 border border-gray-700 outline-none rounded-md px-2 py-1 text-sm bg-gray-500 w-20 appearance-none" placeholder="Nota 4" />
        </div>
    );
}
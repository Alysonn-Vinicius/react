type Props = {
    corrects: number,
    init: () => void;
}
export const Modal = ({ corrects, init }: Props) => {
    return (
        <div className="w-full h-screen flex justify-center items-center bg-blue-600 p-4">
            <main className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black ">
                <div className="p-5 font-bold text-2xl border-b border-x-gray-300 text-center">Você terminou!</div>
                <div className="p-5">Parabens, Você acertou {corrects} quest{corrects > 1 ? 'ões' : 'ão'}</div>
                <div className="p-5 text-center border-t border-gray-300">
                    <button className="bg-blue-700 text-white px-2 py-3 rounded-md cursor-pointer" onClick={init}>Reiniciar Quiz</button>
                </div>
            </main>
        </div>
    );
}
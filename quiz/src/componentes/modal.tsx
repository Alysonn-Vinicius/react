type Props = {
    corrects:number
}
export const Modal = ({corrects}:Props) => {
    return (
        <div className="w-full h-screen flex justify-center items-center bg-blue-600 p-4">
            <main className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black ">
                <div className="p-5 font-bold text-2xl border-b border-x-gray-300 text-center">Você terminou!</div>
                <div className="p-5">Parabens, Você acertou {corrects} quest{corrects > 1 ? 'ões' :'ão' }</div>
            </main>
        </div>
    );
}
type Props = {
    funcao: () => void,
    photo: number
}

export const Modal = ({photo, funcao}: Props) => {
    return (
        <>
            <div className="fixed left-0 top-0 bottom-0 right-0 flex justify-center items-center bg-black/90">
                <img src={`/assets/${photo}.jpg`} className="max-w-screen" />
            </div>
            <div className="fixed top-5 right-5 w-10 h-10 text-5xl cursor-pointer" onClick={funcao}>
                x
            </div>
        </>
    );
}
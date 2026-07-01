type Props ={
    labelTitulo: string,
    labelParagrafo:string,
    Icone: React.ElementType,
}
export const Header = ({labelTitulo, Icone ,labelParagrafo}:Props) => {
    return (
        <div className="flex items-center gap-5"> {/**header */}
            <div>
                <Icone size={62} color={'#FFFFFF'} />
            </div>
            <div>
                <h1 className="font-bold text-xl text-white">{labelTitulo}</h1>
                <div className="text-sm text-gray-500">{labelParagrafo}</div>
            </div>
        </div>
    );
}
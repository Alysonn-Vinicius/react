type Props = {
    label: string,
    quantidade: number,
    Icone: React.ElementType,
    cor:string,
}
export const CardRes = ({ label,cor, quantidade, Icone }: Props) => {
    return (
        <>
            <div className='border border-gray-700/40 p-4 rounded-md flex flex-col bg-white/4 backdrop-blur-sm'>
                <div className='text-gray-500 font-semibold text-sm'>{label}</div>
                <div className="flex justify-between items-center ">
                    <div className={`font-bold text-2xl ${cor}`}>{quantidade}</div>
                    <div>
                        <Icone className={cor} size={25} />
                    </div>
                </div>
            </div>
        </>
    )
} 
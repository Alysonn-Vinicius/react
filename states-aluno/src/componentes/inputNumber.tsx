type Props = {
    label:string
}
export const inputNumber = ({label}:Props) => {
    return(
        <>
            <input type="number" name="nota1" className="flex-8/12 border border-gray-700 outline-none rounded-md px-2 py-1 text-sm bg-gray-500 w-20 appearance-none" placeholder={label} />
        </>
    );
}
type Props = {
    label:string,
    onFunc: () => void;
}
export const Button = ({label, onFunc}:Props) => {
    return(
        <button onClick={onFunc} className="text-white p-3 bg-blue-600 rounded-md">{label}</button>
    );
}
type Props = {
    label:string,
    aba:boolean,
    onclick: ()=> void;
}
export const ButtonNav = ({label,aba,onclick}:Props) => {
    return(
        <button className={`border border-gray-700 px-8 py-2 rounded-md hover:bg-blue-600 cursor-pointer transition-all ${(aba)?"bg-blue-600": "bg-gray-700"} flex-1`} onClick={onclick}>
            {label}
        </button>
    );
}
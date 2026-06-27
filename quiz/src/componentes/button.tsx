type Props ={
        label: string,
        classname?:string,
        handle: ()=> void;
    }
    
export const Button = ({label,classname, handle}:Props) => {
    return (
        <button className={`${classname} px-2 bg-blue-700 cursor-pointer rounded-md hover:opacity-80`} onClick={handle}>
            {label}
        </button>
    );
}

'use client'
import { useContext, useState } from "react";
import { Subtitulo } from "./subtitutlo";
import { listPostContext } from "../contexts/contextPosts";


export const Header = () => {
    let contextPost = useContext(listPostContext);

    const [titleIn, SetTitleIn] = useState('');
    const [textBody, setTextBody] = useState('');
    const handlePost = (title:string, body:string)=> {
        if(title && body){
            contextPost?.addPost(
                title, body
            )
            SetTitleIn('');
            setTextBody('');
        }       
    }
    return (
        <header>
            <Subtitulo />
            <div className="max-w-xl flex flex-col gap-2  border border-dotted border-gray-400 p-1">
                <input type="text"
                    className="border bg-gray-300 text-black text-xl"
                    placeholder="Digite o Titulo"
                    value={titleIn}
                    onChange={(e)=>SetTitleIn(e.target.value)}

                />
                <textarea 
                className="border bg-gray-300 p-2 text-black text-xl"
                 placeholder="Digite seu post"
                 value={textBody}
                 onChangeCapture={(e)=>setTextBody(e.target.value)}
                 >

                 </textarea>

                <button className="bg-blue-500 p-2 cursor-pointer rounded-md" onClick={()=> handlePost(titleIn, textBody)}>Adicionar</button>
            </div>




        </header>
    );
}
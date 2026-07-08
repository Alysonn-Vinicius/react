import { useEffect, useRef } from "react";

type Props = {
    isPlaying:boolean,
    src:string,
}
export const VideoPlayer = ({isPlaying, src}:Props) => {

    const videoTag = useRef<HTMLVideoElement>(null);

    useEffect(()=> { 
        isPlaying 
        ? videoTag.current?.play() 
        : videoTag.current?.pause();   
    }, [isPlaying])

    return (
        <div className="w-2xl h-3xl">
            <video 
            src={src}
            loop //ficar repetindo o video
            playsInline //impede que o vídeo seja aberto em tela cheia automaticamente em aparelhos celulares (como o iPhone).
            ref={videoTag}
            />
        </div>
    );
}
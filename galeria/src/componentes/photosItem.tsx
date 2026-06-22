import { Photo } from "../types/photo";

type Props = {
    photo: Photo,
    funcao: () => void;
}
export const PhotoItem = ({ photo, funcao }: Props) => {
    return (
        <div className="hover:opacity-80 overflow-hidden">
            <img
                src={`${photo.url}`}
                onClick={funcao}
                className="w-full h-48 object-cover cursor-pointer"
            />
        </div>
    );
}   
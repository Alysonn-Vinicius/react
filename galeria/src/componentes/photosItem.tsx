import { Photo } from "../types/photo";

type Props = {
    photo: Photo,
    showPhoto: () => void;
}
export const PhotoItem = ({photo, showPhoto}:Props) => {
    return (
        <div className="hover:opacity-80">
            <img src={`${photo.url}`} onClick={showPhoto} className="w-full" />
        </div>
    );
}   
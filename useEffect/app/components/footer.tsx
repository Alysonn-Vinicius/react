import { useContext } from "react";
import { listPostContext } from "../contexts/contextPosts";

export const Footer = () => {
    const contextPost = useContext(listPostContext);
    const listC = contextPost?.posts;
    return (
        <footer>
           
            Total de post:  {listC !== undefined && listC.length}
        </footer>
    );
}
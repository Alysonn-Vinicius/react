import { ReactNode, useState, createContext } from "react";
import { Post } from "../types/post";

type PostsContext = {
    posts: Post[];
    addPost:(title:string, body:string) => void;
}
export const listPostContext = createContext<PostsContext|null>(null);

export const PostProvider = ({children}: {children:ReactNode}) => {
    const [posts, setPost] = useState<Post[]>([]);

    const addPost = (title:string, body:string) => {
       setPost([
        ...posts, {id: Date.now(), title, body}
       ])
    }
    return(
        <listPostContext.Provider value={{posts, addPost}}>
            {children}
        </listPostContext.Provider>
    );
}
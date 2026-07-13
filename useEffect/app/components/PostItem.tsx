import { useContext } from "react";
import { listPostContext } from "../contexts/contextPosts";

export const PostItem = () => {
    const listContext = useContext(listPostContext);
    return (
        <div>
            {listContext?.posts.map(item => (
                <div key={item.id} className="p-3 border-b border-gray-500">
                    <div className="text-xl font-bold mb-2">{item.title}</div>
                    <div className="text-sm">{item.body}</div>
                </div>
            ))}
        </div>
    );
}
'use client'

import { useState } from "react";

const Home = () => {
    const [count, setCount] = useState(0)

    const handleCount = (n:number) => {
        setCount(count + 1);
        console.log(count)
    }

    return (
        <main className="container mx-auto bg-slate-800 flex justify-center items-center h-screen">
           <div className="flex flex-col gap-0">
                {count}
                <button onClick={() => handleCount(count)} className="bg-blue-600 text-white p-2 rounded-md cursor-pointer">+1</button>
           </div>

        </main>
    );
}

export default Home;
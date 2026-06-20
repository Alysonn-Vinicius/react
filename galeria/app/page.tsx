'use client'

import { PhotoItem } from "@/src/componentes/photosItem";
import { photoList } from "@/src/data/photoList";

export default function Home() {
  const handleZoom = (id:number) => {
    alert(id)
  }
  return (
    <div className="w-screen h-screen">
      <h1 className="text-2xl text-center my-5 ">Galeria de Imagens</h1>
        <section className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <img src="/assets/1.jpg" alt="" />
        {
          photoList.map(item => (
            <PhotoItem 
            key={item.id}
            photo={item}
            showPhoto={()=> {}}
            />
          ))
        }

          
        </section>
    </div>
  );
}

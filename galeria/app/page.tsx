'use client'

import { Modal } from "@/src/componentes/modal";
import { PhotoItem } from "@/src/componentes/photosItem";
import { photoList } from "@/src/data/photoList";
import { useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false) //vai dizer quando abrir ou nao
  const [fotoSelected, setFotoSelected] = useState(0);

  const handleZoom = (id:number) => {
     setFotoSelected(id);
    setShowModal(true);
  }


  const closeModal =() => {
    setFotoSelected(0);
    setShowModal(false);
  }
  return (
    <div className="w-screen h-screen">
      <h1 className="text-2xl text-center my-5 ">Galeria de Imagens</h1>
        <section className="container mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {
          photoList.map(item => (
            <PhotoItem 
            key={item.id}
            photo={item}
            funcao={()=> handleZoom(item.id)}
            />

            
          ))
        }
        { showModal && <Modal photo={fotoSelected} funcao={closeModal}/>
        }

         

        
          
        </section>
    </div>
  );
}

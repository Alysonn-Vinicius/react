import { Button } from "@/src/componentes/button";


export default function Home() {
  const handleButtonClick = (msg:string) => {
    alert(msg)
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <Button
      label="meu botão"
      onFunc={()=> handleButtonClick}/>
    </div>
  );
}

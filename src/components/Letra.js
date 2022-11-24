import Letras from "./Letras";
import React from "react";

export default function Letra(props){

   return( 
<button onClick={()=>props.onclick(props.letra)}
className={`letras-botao
${props.letrasClicadas.includes(props.letra)?"botao-desabilitado":""}`}
//{!palavra?"botao-desabilitado":""}
>{props.letra.toUpperCase()}</button>
   )
}
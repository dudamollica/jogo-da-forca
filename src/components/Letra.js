import React from "react";

export default function Letra(props){

   return( 
<button onClick={()=>props.onclick(props.letra)} data-test="letter"

className={`letras-botao
${props.letrasClicadas.includes(props.letra)?"botao-desabilitado":""}
${props.palavra.length>0?"":"botao-desabilitado"}
${props.palavra.length==props.acertos?"botao-desabilitado":""}
${props.erros==6?"botao-desabilitado":""}`} 

disabled={props.erros==6?true:false ||
 props.letrasClicadas.includes(props.letra)?true:false || 
 props.palavra.length==props.acertos?true:false ||
 props.palavra.length>0?false:true }

>{props.letra.toUpperCase()}</button>
   )
}
import React from "react";

export default function Palavra(props){
    return(
        <li class={`letras-palavra-jogo 
        ${props.erros==6?"palavra-errada":""}`}>

        {props.erros==6?props.letra:"_"  && props.letrasClicadas.includes(props.letra)?props.letra:"_"}
        </li>
    )
}
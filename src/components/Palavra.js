import React from "react";

export default function Palavra(props){
    return(
        <li className={`letras-palavra-jogo 
        ${props.erros==6?"palavra-errada":""}
        ${props.palavra.length==props.acertos?"palavra-certa":""}`}>

        {props.erros==6?props.letra:"_"  && props.letrasClicadas.includes(props.letra)?props.letra:"_" &&
        props.acertos==props.palavra.length?props.letra:"_" }
        </li>
    )
}
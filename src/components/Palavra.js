import React from "react";

export default function Palavra(props){
    return(
        <li>
        {props.erros==6?props.letra:"_"  && props.letrasClicadas.includes(props.letra)?props.letra:"_"}
        </li>
    )
}
import React from "react";
import Jogo from "./Jogo";

export default function Palavra(props){
    return(
        <li>
        {props.letrasClicadas.includes(props.letra)?props.letra:"_"}
        </li>
    )
}
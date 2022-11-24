import React from "react";
import Jogo from "./Jogo";

export default function Palavra(props){
    return(
        <li>
        <div className="letra letra-escondida">{props.letra}</div>
        <div className="underline"></div>
        </li>
    )
}
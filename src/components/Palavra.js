import Jogo from "./Jogo";

export default function Palavra(props){
    return(
        <li>
        <div class="letra letra-escondida">{props.letra}</div>
        <div class="underline"></div>
        </li>
    )
}
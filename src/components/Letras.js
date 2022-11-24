import React from "react"
import Letra from "./Letra"

export default function Letras(props) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


    function letraEscolhida(letraEscolhida) {
        if(props.palavra!=""){
        if(!props.letrasClicadas.includes(letraEscolhida)){
        const novoArray = [...props.letrasClicadas, letraEscolhida]
        props.setLetrasClicadas(novoArray)
        }
        if(!props.palavra.includes(letraEscolhida)){
        props.setErros(props.erros+1)
        }
        }
    }

    return (
        <div className="letras">
            <div>
                {alfabeto.map((l) => <Letra
                    palavra={props.palavra}
                    erros={props.erros}
                    letrasClicadas={props.letrasClicadas}
                    onclick={letraEscolhida}
                    letra={l} key={l} />)}
            </div>
        </div>
    )
}
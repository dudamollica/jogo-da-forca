import React from "react"
import Letra from "./Letra"

export default function Letras(props) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    const [letrasClicadas, setLetrasClicadas] = React.useState([])
    console.log(letrasClicadas)

    function letraEscolhida(letraEscolhida) {
        if(props.palavra!=""){
        if(!letrasClicadas.includes(letraEscolhida)){
        const novoArray = [...letrasClicadas, letraEscolhida]
        setLetrasClicadas(novoArray)
        }
        }
    }

    return (
        <div className="letras">
            <div>
                {alfabeto.map((l) => <Letra
                    palavra={props.palavra}
                    letrasClicadas={letrasClicadas}
                    onclick={letraEscolhida}
                    letra={l} key={l} />)}
            </div>
        </div>
    )
}
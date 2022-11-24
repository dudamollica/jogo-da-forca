import React from "react"
import Letra from "./Letra"

export default function Letras() {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    const [letrasClicadas, setLetrasClicadas] = React.useState([])
    console.log(letrasClicadas)

    function letraEscolhida(letraEscolhida) {
        // if(palavra!=""){
        if(!letrasClicadas.includes(letraEscolhida)){
        const novoArray = [...letrasClicadas, letraEscolhida]
        setLetrasClicadas(novoArray)
        //}
        }
    }

    return (
        <div className="letras">
            <div>
                {alfabeto.map((l) => <Letra
                    letrasClicadas={letrasClicadas}
                    onclick={letraEscolhida}
                    letra={l} key={l} />)}
            </div>
        </div>
    )
}
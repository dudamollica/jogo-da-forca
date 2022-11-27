import React from "react"

export default function Letras(props) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


    function letraEscolhida(letraEscolhida) {
        if (props.palavra != "") {
            if (!props.letrasClicadas.includes(letraEscolhida)) {
                const novoArray = [...props.letrasClicadas, letraEscolhida]
                props.setLetrasClicadas(novoArray)
            }
            const vezesLetraRepete = props.palavra.filter((l) => letraEscolhida == l)
            if (!props.palavra.includes(letraEscolhida)) {
                props.setErros(props.erros + 1)
            } else {
                props.setAcertos(props.acertos + (1 * vezesLetraRepete.length))
            }
        }
    }

    return (
        <div className="letras">
            <div>
                {alfabeto.map((l) => <Letra
                    acertos={props.acertos}
                    palavra={props.palavra}
                    erros={props.erros}
                    letrasClicadas={props.letrasClicadas}
                    onclick={letraEscolhida}
                    letra={l} key={l} />)}
            </div>
        </div>
    )
}

function Letra(props) {

    return (
        <button onClick={() => props.onclick(props.letra)} data-test="letter"

            className={`letras-botao
 ${props.letrasClicadas.includes(props.letra) ? "botao-desabilitado" : ""}
 ${props.palavra.length > 0 ? "" : "botao-desabilitado"}
 ${props.palavra.length == props.acertos ? "botao-desabilitado" : ""}
 ${props.erros == 6 ? "botao-desabilitado" : ""}`}

            disabled={props.erros == 6 ? true : false ||
                props.letrasClicadas.includes(props.letra) ? true : false ||
                    props.palavra.length == props.acertos ? true : false ||
                        props.palavra.length > 0 ? false : true}

        >{props.letra.toUpperCase()}</button>
    )
}
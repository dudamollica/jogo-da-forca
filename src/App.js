import React from "react"
import Chute from "./components/Chute.js"
import Jogo from "./components/Jogo.js"
import Letras from "./components/Letras.js"
import palavras from "./palavras.js"

export default function App() {
    const [palavra, setPalavra] = React.useState([])
    console.log(palavra)
    const [letrasClicadas, setLetrasClicadas] = React.useState([])
    console.log(letrasClicadas)
    const [erros, setErros] = React.useState(0)
    const [acertos, setAcertos] = React.useState(0)
    console.log("acertos "+acertos)


    function embaralharPalavras() {
        function comparador() {
            return (Math.random() - 0.5)
        }
        palavras.sort(comparador)
        setPalavra(palavras[0].split(''))
        if (palavra != "") {
            setErros(0)
            setLetrasClicadas([])
            setAcertos(0)
        }
    }

    return (
        <>
            <Jogo letrasClicadas={letrasClicadas}
                palavra={palavra}
                embaralharPalavras={embaralharPalavras}
                erros={erros}
                acertos={acertos}
            />
            <Letras letrasClicadas={letrasClicadas}
                setLetrasClicadas={setLetrasClicadas}
                palavra={palavra}
                erros={erros}
                setErros={setErros} 
                acertos={acertos}
                setAcertos={setAcertos}/>
            <Chute />
        </>
    );
}


import React from "react"
import Chute from "./components/Chute.js"
import Jogo from "./components/Jogo.js"
import Letras from "./components/Letras.js"
import palavras from "./palavras.js"

export default function App() {
 const [palavra, setPalavra]= React.useState([])
    function embaralharPalavras() {
        function comparador() {
            return (Math.random() - 0.5)
        }
    palavras.sort(comparador)
    setPalavra(palavras[0].split(''))
    }

 //const letraClicada que ta nas Letras para o Jogo, para saber se acertou ou errou


  return (
  <>
  <Jogo palavra={palavra} embaralharPalavras={embaralharPalavras}/>
  <Letras palavra={palavra}/>
  <Chute/>
  </>
  );
}


import React from "react"
import Chute from "./components/Chute.js"
import Jogo from "./components/Jogo.js"
import Letras from "./components/Letras.js"
import palavras from "./palavras.js"

export default function App() {
 // const Palavra que ta no Jogo para desabilitar e habilitar botoes no inicio,
 // passar ela para as Letras.
 const [palavra, setPalavra]= React.useState([])
    function embaralharPalvras() {
        function comparador() {
            return (Math.random() - 0.5)
        }
    palavras.sort(comparador)
    setPalavra(palavras[0].split(''))
    }

 //const letraClicada que ta nas Letras para o Jogo, para saber se acertou ou errou


  return (
  <>
  <Jogo palavra={palavra} embaralharPalvras={embaralharPalvras}/>
  <Letras palavra={palavra}/>
  <Chute/>
  </>
  );
}


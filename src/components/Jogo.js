import Forca from "./Forca.js"
import React from "react"
import Palavra from "./Palavra.js"

export default function Jogo(props) {

    const imagem = [
        {
            classe: "forcaImg forca-zero",
            imagem: "assets/forca0.png"
        },

        {
            classe: "forcaImg forca-um escondido",
            imagem: "assets/forca1.png"
        },

        {
            classe: "forcaImg forca-dois escondido",
            imagem: "assets/forca2.png"
        },

        {
            classe: "forcaImg forca-tres escondido",
            imagem: "assets/forca3.png"
        },
        {
            classe: "forcaImg forca-quatro escondido",
            imagem: "assets/forca4.png"
        },
        {
            classe: "forcaImg forca-cinco escondido",
            imagem: "assets/forca5.png"
        },
        {
            classe: "forcaImg forca-seis escondido",
            imagem: "assets/forca6.png"
        }
    ]
    return (
        < >
            <div className="jogo">
                <div className="forca">
                {imagem.map((i) => <Forca classe={i.classe} img={i.imagem} key={i.imagem} />)}
                </div>
                <div className="botao-e-palavra">
                <button onClick={props.embaralharPalavras}>Escolher Palavra</button>
                <ul>
                {props.palavra.map((l, index)=><Palavra letrasClicadas={props.letrasClicadas} 
                letra={l} key={index}/>)}
                </ul>
                </div>
            </div>
        </>
    )
}


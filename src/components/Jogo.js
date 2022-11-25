import Forca from "./Forca.js"
import React from "react"
import Palavra from "./Palavra.js"

export default function Jogo(props) {

    const imagem = [
        {
            classe: `forcaImg forca-zero ${props.erros == 0 ? "" : "escondido"}`,
            imagem: "assets/forca0.png"
        },

        {
            classe: `forcaImg forca-um ${props.erros == 1 ? "" : "escondido"}`,
            imagem: "assets/forca1.png"
        },

        {
            classe: `forcaImg forca-dois ${props.erros == 2 ? "" : "escondido"}`,
            imagem: "assets/forca2.png"
        },

        {
            classe: `forcaImg forca-tres ${props.erros == 3 ? "" : "escondido"}`,
            imagem: "assets/forca3.png"
        },
        {
            classe: `forcaImg forca-quatro ${props.erros == 4 ? "" : "escondido"}`,
            imagem: "assets/forca4.png"
        },
        {
            classe: `forcaImg forca-cinco ${props.erros == 5 ? "" : "escondido"}`,
            imagem: "assets/forca5.png"
        },
        {
            classe: `forcaImg forca-seis ${props.erros == 6 ? "" : "escondido"}`,
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
                    <button onClick={props.embaralharPalavras}
                        data-test="choose-word">Escolher Palavra</button>
                    <ul data-test="word" data-answer={props.palavra.join("")}>
                        {props.palavra.map((l, index) => <Palavra palavra={props.palavra}
                            acertos={props.acertos}
                            letrasClicadas={props.letrasClicadas}
                            erros={props.erros}
                            letra={l} key={index} />)}
                    </ul>
                </div>
            </div>
        </>
    )
}


export default function Chute(props) {

    function errouAcertou() {
        const palavra = props.palavra.join("")
        props.setTextoInput("")
        if (props.textoInput == palavra) {
            props.setAcertos(props.palavra.length)
        } else {
            props.setErros(6)
        }
    }

    return (
        <div className="chute">
            <span>Já sei a palavra!</span>

            <input
                onChange={(e) => props.setTextoInput(e.target.value)}
                value={props.textoInput}
                data-test="guess-input"
                disabled={props.erros == 6 ? true : false ||
                    props.palavra.length == props.acertos ? true : false ||
                        props.palavra.length > 0 ? false : true
                }>
            </input>
            <button onClick={errouAcertou}
                data-test="guess-button">Chutar</button>
        </div>
    )
}
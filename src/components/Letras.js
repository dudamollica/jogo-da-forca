import Letra from "./Letra"

export default function Letras(){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
   
   
    return(
        <div className="letras">
        <div>
        {alfabeto.map((l)=> <Letra letra={l} key={l}/>)}
        </div>
        </div>
    )   
}
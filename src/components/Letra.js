import Letras from "./Letras";

export default function Letra(props){
   return( 
<button>{props.letra.toUpperCase()}</button>
   )
}
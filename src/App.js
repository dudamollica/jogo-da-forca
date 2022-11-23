import Chute from "./components/Chute.js"
import Jogo from "./components/Jogo.js"
import Letras from "./components/Letras.js"
import palavras from "./palavras.js"

export default function App() {
 
  return (
  <>
  <Jogo palavras={palavras}/>
  <Letras/>
  <Chute/>
  </>
  );
}


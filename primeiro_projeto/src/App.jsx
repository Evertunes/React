import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Objeto
const usuario = {
  nome: "Everton",
  sobrenome: "Alves"
}

//Constante
const OlaMundo = () => {
  return(
    <h3>Olá Mundo!</h3>
  )
}

//função chama a Constante e chama os objetos (nome, sobrenome)
const BoasVindasUsuario = () =>{
  return(
    <p>Seja Bem-vindo(a) usuário(a) {usuario.nome} {usuario.sobrenome}!</p>
  )
}
function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
      </div>
      <p className="read-the-docs">
        Usando Vite pela primeira vez!
      </p>
      {/* Chama os componentes OlaMundo e BoasVindasUsuario criados acima  */}
      <OlaMundo/>
      <BoasVindasUsuario/>
    </>
    
  )
}

export default App

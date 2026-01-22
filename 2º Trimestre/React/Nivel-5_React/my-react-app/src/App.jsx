import { useState } from 'react'
import styles from "./app.module.css"

function App() {
  return (
    <div className='p-6'>
      <h1 className='text-3x1 font-bold'>CSS en React</h1>
      <p className='mt-2 text-sm opacity-80'>
        Estilos con clases de utilidad, como bootstrap
      </p>
      <button className='mt-4 px-4 py-2 text-white bg-blue-500 rounded hover:bg-green-600 transition-colors duration-300'>
        Suscribirme
      </button>
    </div>
  );
}

function MostrarTexto() {
  const [visibilidad, setVisibilidad] = useState(true)

  const toggleVisibilidad = () =>{
    setVisibilidad(!visibilidad)
  } 

  return(
    <>
      {visibilidad && <p>Texto a esconder (Perdon por la poca creatividad, me da vueltas la cabeza) <Contador /></p>}

      <button onClick={toggleVisibilidad}>{visibilidad ? "Esconder" : "Enseñar"}</button>
    </>
  )
}

function Contador(){
  let [numero, setNumero] = useState(0)

  const sumarNumero = () =>{
    setNumero(++numero)
  }

  const restarNumero = () =>{
    numero == 0 ? '' : setNumero(--numero)
  }

  return(
    <>
      <br />
      <p>Contador:{numero}</p>
      <p>LLega a 5 para continuar</p>

      <button onClick={sumarNumero}>+1</button>
      <button onClick={restarNumero}>-1</button>

      {numero >= 5 && <ModoText />}
    </>
  )
}

function ModoText(){
  const [texto, setTexto] = useState('')

  return(
    <>
      <p>Modo: {texto||"No hay modo"}</p>
      <input type="text" placeholder='Escribe aqui tu modo' value={texto} onChange={(r) => setTexto(r.target.value)} />
    </>
  )
}


export default App
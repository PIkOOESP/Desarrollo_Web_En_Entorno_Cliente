import { useState } from 'react'

function App() {
  return (
    <>
      <MostrarTexto />
    </>
  )
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
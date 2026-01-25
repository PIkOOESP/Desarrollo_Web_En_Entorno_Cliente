import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [nombre, setNombre] = useState('')
  const [contra, setContra] = useState('')
  const [email, setEmail] = useState('')
  const [deshabilitado, setDeshabilitado] = useState(true)

  const [nombreError, setNombreError] = useState('')
  const [contraError, setContraError] = useState('')
  const [emailError, setEmailError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleErrors = () => {
      setDeshabilitado(nombreError || contraError || emailError)
  }

  const handleNombre = (e) => {
    const { value } = e.target
    setNombre(value)

    if(value.length <= 6){
      setNombreError("El nombre debe tener mas de 6 caracteres.")
    } else {
      setNombreError('')
    }
    handleErrors()
  }

  const handleContra = (e) =>{
    const { value } = e.target
    setContra(value)

    if (value.length <= 8){
      setContraError("La contraseña debe tener mas de 8 caracteres.")
    } else {
      setContraError('')
    }
    handleErrors()
  }

  const handleEmail = (e) => {
    const { value } = e.target
    setEmail(value)

    const regla = /^[a-zA-Z0-9_]+@[a-zA-Z0-9]+[.][a-z]+$/;

    if(!regla.test(value)){
      setEmailError("Debe introducirse un email válido")
    } else {
      setEmailError("")
    }
    handleErrors()
  }

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" value={nombre} onChange={handleNombre} placeholder='Nombre de usuario' />
      <p>{nombreError}</p>

      <input type="password" value={contra} onChange={handleContra} placeholder='Contraseña' />
      <p>{contraError}</p>

      <input type="text" value={email} onChange={handleEmail} placeholder='Email' />
      <p>{emailError}</p>
      <button disabled = {deshabilitado}>Enviar</button>
    </form>
  )
}

export default App

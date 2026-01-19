import { useState } from 'react'

function App() {
  const [user, setUser] = useState(null)
  const [newEmails, setNewEmails] = useState(0)

  const button = user
  ? <button onClick={() => setUser(null)}>Logout</button>
  : <button onClick={() => setUser({ name : 'Klara'
  })}>Login</button>

  return (
    <>
    <h1>Nivel 5: Renderizado condicional</h1>
    {button}

    {user ? <p>Bienvenido, {user.name}.</p> : <p>Inicia sesión para continuar.</p>}

    <hr />

    <button onClick={() => setNewEmails((n) => n + 1)}>+1 email</button>
    <button onClick={() => setNewEmails(0)}>Reset</button>

    {newEmails > 0 && (
    <h2><hr />Tienes {newEmails} correos nuevos.</h2>
    )}
    </>
  )
}


export default App
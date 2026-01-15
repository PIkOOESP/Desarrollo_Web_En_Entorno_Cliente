import { useState } from "react"

function App() {
   return <ParentComponent/>
}

function ParentComponent(){
    const [name, setName] = useState("Dani")

   return <HijitoComponent name = {name} setName ={setName}/>
}

function HijitoComponent(props){
    return(<> 
        <p>Unas pipsas {props.name}</p>
        <button onClick={() => props.setName("Klara")}>Cambiar</button>
        <button onClick={() => props.setName("Carlos")}>Cambiar.Segunda Parte</button>
        </>
    )
}

function UserComponent(){
    return <>
        <h3>Oigo que vuelve y vuelvo a ver. Vuelvo a mover los pies. Viento, me pongo en movimiento. Y hago crecer las olas. Del mar que tienes dentro</h3>
    </>
} 

function ProfileComponent(){
    return <>
        <h4>Tercer movimiento: Lo de dentro</h4>
    </>
} 

function FeedComponent(){
    return <>
        <h5>Extremoduro</h5>
    </>
}

//Pin Pon es un muñeco muy guapo y de cartón. Se lava la carita con agua y con jabón
export default App
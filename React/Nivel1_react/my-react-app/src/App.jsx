function App() {
    return <>
        <h1>Realmente puedo escribir aqui lo que quiera</h1>
        <h2>La cucaracha, la cucaracha ya no puede caminar, por que no tiene, porque le faltan las patitas de atras</h2>
        <br />
        {/*Un dos tres, un pasito pa'lante maria, un dos tres, un pasito pa'tras*/}
        <ParentComponent/>
    </>
}

function ParentComponent(){
    return <>
        <UserComponent/>
        <ProfileComponent/>
        <FeedComponent/>
    </>
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
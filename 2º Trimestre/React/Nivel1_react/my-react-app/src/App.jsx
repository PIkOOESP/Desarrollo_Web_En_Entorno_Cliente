function App() {
   const users = [
        { id: 1, name: 'Iker', role: 'Team Tester' },
        { id: 2, name: 'Antonio', role: 'Master' },
        { id: 3, name: 'Fran', role: 'Chair Tester' },
        { id: 4, name: 'Estefania', role: 'Animal Tester'}
    ]

    return (
        <>
        <p>Lista de usuarios activos:</p>
        <ul>
            {users.map(function (user) {
                return (
                    <li key={user.id} className={user.role}>
                    {user.name} — {user.role}
                    </li>
                )
            })}
        </ul>
        </>
    )
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
import React, {useEffect, useState} from "react";

const App = () => {

    const [count, setCount] = useState(0)
    const [usuario, setUsuario] = useState("")
    const [usuarios, setUsuarios] = useState(["Pablo", "José", "Manoel"]);

    const handleAddUser = () =>{
        setUsuarios([...usuarios, usuario])
        setUsuario("")
    }

    useEffect(() =>{
        setCount(usuarios.length)
    }, [usuarios])

    return (
        <div className="App">
            <h1> Hello DIO!</h1>
            <h3> Total {count}</h3>
            <div>
                <input value={usuario} onChange={(event) => setUsuario(event.target.value)}
                      />
                <button onClick={handleAddUser}>Adicionar</button>
            </div>
            <hr/>
            {usuarios.map((item) => (
                <p key={item}>{item}</p>
            ))}
        </div>
    );
};

export default App;

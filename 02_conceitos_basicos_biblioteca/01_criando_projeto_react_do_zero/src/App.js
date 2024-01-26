import React, {useEffect, useState} from "react";

const App = () => {
    const [usuarios, setUsuarios] = useState(["Pablo", "José", "Manoel"]);

    useEffect(()=>{
        setTimeout(()=>{
            setUsuarios([...usuarios, "Bruno"])
        },3000)
    }, [])

    return (
        <div className="App">
            <h1> Hello DIO!</h1>
            {usuarios.map((item) =>(
                <p key={item}>{item}</p>
            ))}
        </div>
    );
};

export default App;

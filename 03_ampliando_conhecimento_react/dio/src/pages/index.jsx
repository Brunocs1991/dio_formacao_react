import React, {useMemo, useState} from "react";

const Tests = () => {

    const [age, setAge] = useState(26)

    const handleChangeName = () => {
        setAge(prevState => prevState === 26 ? 32 : 26)
    }

    const calculo = useMemo(() => {
        console.log("Calculou", age)
        return 10 * age
    }, [age]);
    console.log('Renderizou', calculo)
    // useEffect(() =>{
    //     handleChangeName()
    // }, [])

    return (
        <div>
            <p>{age}</p>
            <button onClick={handleChangeName}>Alterar</button>
        </div>

    )
}

export {Tests}

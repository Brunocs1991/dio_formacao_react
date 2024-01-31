import React, {useCallback, useEffect, useMemo, useState} from "react";

const Tests = () => {

    const [age, setAge] = useState(26)
    const [name, setName] = useState("Bruno")

    const handleChangeAge = useCallback(() => {
        const newAge = 10 * age
        console.log('age atual', age, newAge)
        setAge(prevState => prevState === 26 ? 32 : 26)
    }, [age])

    const handleChangeName =  useCallback(() => {
        setName(prevState => prevState === 'Bruno' ?'Bruno Costa': 'Bruno')
    },[name])

    const calculo = useMemo(() => {
        console.log("Calculou", age)
        return 10 * age
    }, [age]);



    useEffect(() =>{
        handleChangeName()
    }, [])


    console.log('Renderizou', calculo)

    return (
        <div>
            <p>idade: {age}</p>
            <p>nome: {name}</p>
            <br/>
            <button onClick={handleChangeName}>Alterar nome</button>
            <br/>
            <button onClick={handleChangeAge}>Alterar Idade</button>
        </div>

    )
}

export {Tests}

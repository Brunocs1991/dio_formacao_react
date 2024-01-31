import React, {useEffect, useState} from "react";

const Tests = () => {

    const [name, setName] = useState('Bruno')

    const handleChangeName = () => {
        setName(prevState => prevState ==='Bruno' ? 'Bruno Costa' : 'Bruno')
    }

    useEffect(() =>{
        handleChangeName()
    }, [])
    return (
        <div>
            <p>{name}</p>
            <button onClick={handleChangeName}>Alterar</button>
        </div>

    )
}

export {Tests}

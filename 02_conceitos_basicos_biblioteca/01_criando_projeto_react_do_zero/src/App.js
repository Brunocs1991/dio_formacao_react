import React from "react";

const App = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <div className="App">
            <h1> Hello DIO!</h1>
            {arr.map(item => {
                return <p key={item}>  5 * {item}  = {5 * item}</p>
            })}
        </div>
    );
};

export default App;

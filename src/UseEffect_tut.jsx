import React, { useEffect, useState } from 'react';


const App = () => {
    const [num, setNum] = useState(0);
    useEffect(() => {

        document.title = ` ${num} times`;
    })
    return <button onClick={() => {
        setNum(num + 1)
    }}> CLick Me {num} </button>;

};
export default App;
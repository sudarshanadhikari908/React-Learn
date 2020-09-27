
import React, { useState } from 'react';

;




const Events = () => {
    const purple = 'purple';
    const btn = 'Click Me';
    const [bg, setBg] = useState(purple);
    const [bttn, setName] = useState('CLick Me');

    const bgChange = () => {
        let newBg = 'pink';
        setBg(newBg);
        let btn2 = " ❤️ ❤️ "
        setName(btn2);





    };
    const change = () => {
        setBg("gray");
        setName(" ❤️  ❤️❤️")

    };

    return (
        <>
            <div style={{ backgroundColor: bg }}>
                <button onMouseEnter={bgChange} onMouseLeave={change}>{bttn}</button>
            </div>

        </>

    );

}

export default Events;
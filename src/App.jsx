
import React from 'react';
import SlotM from './SlotM';


const App = () => {
    return (
        <>
            <h1 className="heading"> 🎰 Welcome To <span style={{ fontWeight: "bold" }}> Slot Machine Game</span> 🎰</h1>
            <div className="slotmachines">
                <SlotM x='😃' y='😃' z='😃' />
                <SlotM x='💌' y='✋' z='😃' />
                <SlotM x='💩' y='💩' z='💩' />

            </div>

        </>
    )

};

export default App;
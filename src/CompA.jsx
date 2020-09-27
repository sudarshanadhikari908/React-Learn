import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CompA = () => {
    const [num, setNum] = useState({
        numb: '',
        name: '',
        move: '',

    });
    useEffect(() => {
        async function getdata() {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            setNum({
                name: res.data.name,
                move: res.data.moves.length,
            })
        }
    })

    return (
        <>

            <h1> You choose  <span style={{ color: 'red' }}> </span></h1>
            <h1> my name is <span style={{ color: 'red' }}> {num.name}</span></h1>
            <h1> I have <span style={{ color: 'red' }}> {num.move}</span> moves.</h1>
            <select value={num} onChange={(event) => {

                setNum(event.target.value);
            }}>
                <option value="1">1</option>
                <option value="25">25</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>

            </select>
        </>
    );
}
export default CompA;
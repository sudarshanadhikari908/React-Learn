import React, { useState } from 'react';
import ToDoLists from './ToDoLists';


const App = () => {
    const [inputList, setInput] = useState("");
    const [items, setItems] = useState([]);


    const itemEvent = (event) => {

        setInput(event.target.value)

    };
    const deleteItems = (id) => {

        console.log('delete')
        setItems((olditems) => {
            return olditems.filter((arrElem, index) => {
                return index !== id;
            });

        });
    };
    const listItem = () => {
        setItems((olditems) => {

            return [...olditems, inputList]

        });
        setInput('');

    };


    return (

        <>
            <div className='main_div'>
                <div className='center_div'>


                    <br />
                    <h1>To-Do List</h1>

                    <input type='text' placeholder="Add a Items" onChange={itemEvent} value={inputList} /><button onClick={listItem}> + </button><br />
                    <ul>

                        {items.map((itemval, unique) => {
                            return <ToDoLists text={itemval} key={unique} id={unique} onSelect={deleteItems} />
                        })}



                    </ul>

                </div>



            </div>
        </>

    )
};
export default App;
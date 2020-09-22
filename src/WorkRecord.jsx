import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import List from './List';

const WorkRecord = () => {
    const [item, setItem] = useState("");
    const [newItem, setNewItem] = useState([]);
    const itemEvent = (event) => {
        setItem(event.target.value)

    }
    const listItem = () => {
        setNewItem((preVal) => {
            return [...preVal, item];


        });
        setItem(" ");

    };

    return (
        <>

            <div className="main_div">

                <div className="center_div">
                    <br />
                    <h1>ToDO List</h1>
                    <br />
                    <input type="text" value={item} placeholder="Add Your Work" onChange={itemEvent} />
                    <Button className="newBtn" color="primary" onClick={listItem}>
                        <AddIcon />
                    </Button>
                    <br />
                    <ol>
                        {newItem.map((val, index) => {
                            return <List key={index} value={val} />;
                        })}


                    </ol>
                    <br />






                </div>
            </div>

        </>


    );



}
export default WorkRecord;
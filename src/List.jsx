import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

function List(props) {
    const [line, setLine] = useState();
    const cutIt = () => {
        setLine(true);
    }
    return (
        <div className="todo_style">
            <span onClick={cutIt}> <DeleteIcon className="deleteIcon" /></span>
            <li style={{ textDecoration: line ? "line-through" : "none" }}> {props.value} </li>
        </div>
    );

}
export default List;

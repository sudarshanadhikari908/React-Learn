import React, { useState } from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';



const ToDo = () => {
    const [num, setNum] = useState(0);
    const incNum = () => {
        return (

            setNum(num + 1)
        )


    }
    const decNum = () => {

        if (num === 0) {
            alert('Cannot decrease further');
            setNum(num);
        }



        else

            setNum(num - 1)

    }

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1> {num} </h1>
                    <div className="btn_div">
                        <Tooltip title="Add">
                            <Button className="btn_green" onClick={incNum}><AddCircleIcon /></Button>
                        </Tooltip>
                        <Tooltip title="Delete">
                            <Button className="btn_red" onClick={decNum}><RemoveIcon /></Button>
                        </Tooltip>
                    </div>

                </div>




            </div>

        </>


    )


}

export default ToDo;

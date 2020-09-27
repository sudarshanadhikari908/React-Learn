import React from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';


const User = () => {
    const { name, address } = useParams();
    const location = useLocation();
    const history = useHistory();
    console.log(location);

    return (<> <h1> {name}{address}</h1>
        <p> My current location is {location.pathname}</p>
        {location.pathname === `/user/sudan/kathmandu` ? (
            <Button onClick={() => history.push('/')}> Home</Button>
        ) : null}

    </>);

};
export default User;
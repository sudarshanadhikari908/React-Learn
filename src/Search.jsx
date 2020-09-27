import React, { useState } from 'react';
import Sresult from './Sresult';


const Search = () => {
    const [img, setImg] = useState('');
    const inputEvent = (event) => {
        const e = event.target.value;
        setImg(e);


    }

    return (<>
        <div className='searchbar'>
            <input type='text' placeholder="Search anything" onChange={inputEvent} value={img} />
            {img === "" ? null : <Sresult name={img} />}
        </div>
    </>);

};
export default Search;
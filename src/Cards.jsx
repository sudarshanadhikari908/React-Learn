import React from 'react';
import Images from './Images';



function Card(props) {
    return (
        <>
            <div className="cards">
                <div className="card">
                    <Images imgscr={props.imgscr} />

                    <div className="card__info">
                        <span className="">{props.title}</span>
                        <h3 className="card__title"> {props.sname}</h3>
                        <a href={props.link} target="_blank">
                            <button>Watch Now</button>
                        </a>


                    </div>



                </div>


            </div>

        </>
    );


}
export default Card;
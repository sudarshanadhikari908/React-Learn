import React, { useState } from 'react';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const ReactBoot = () => {


    return (
        <>
            <h1 className="text-center text-capitalize text-danger">Welcome To Technical Sudan</h1>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div class="card" >
                            <img src="https://picsum.photos/200/300" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div class="card" >
                            <img src="https://picsum.photos/200/300" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div class="card">
                            <img src="https://picsum.photos/200/300" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );




}
export default ReactBoot;
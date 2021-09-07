import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {

    return (
        <>
            <div className="container">
                <br/>
                <div className="row">
                        <div className="col s12 m6">
                            <div className="card">
                                <div className="card-image">
                                    <img src="images/luaMel/praia.jpg" alt="lua de mel"/>
                                    <p className="card-title" style={{color: 'grey'}}>Lista de Casamento</p>
                                    <span className="card-title" style={{color: 'grey'}}><b>Lua de Mel</b></span>
                                    <Link to="/lista-presentes-lua-de-mel" className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></Link>
                                </div>
                                <div className="card-content">
                                    <p>A viagem dos sonhos começa por aqui.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col s12 m6">
                            <div className="card">
                                <div className="card-image">
                                    <img src="images/nossaCs/cozinha1.jpg" alt="cozinha"/>
                                    <p className="card-title">Lista de Casamento</p>
                                    <span className="card-title"><b>Nossa Casa</b></span>
                                    <Link to="/lista-presentes-nossa-casa" className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></Link>
                                </div>
                                <div className="card-content">
                                    <p>Presentes exclusivos para o lar do amor.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    <div className="row">
                        <div className="col s12 m6">
                            <div className="card">
                                <div className="card-image">
                                    <img src="images/gramado/mata.jpg" alt="gramado"/>
                                    <p className="card-title">Lista de Casamento</p>
                                    <span className="card-title"><b>Gramado</b></span>
                                    <Link to="/lista-presentes-gramado" className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></Link>
                                </div>
                                <div className="card-content">
                                    <p>A viagem dos sonhos começa por aqui.</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}
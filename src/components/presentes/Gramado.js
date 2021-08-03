import React from 'react'

export default function Gramado() {
    return (
        <div className="container">
        <br/>
        <div style={{marginLeft: '10px'}}>
            <h6 style={{fontSize: '15px'}}><b>LISTA DE PRESENTES</b></h6>
            <h4><b>Gramado</b></h4>
            <p>A viagem dos sonhos começa por aqui.</p>
        </div>

        <div className="row">
            <div className="col s12 m4">
                <div className="card">
                    <div className="card-image">
                        <img src="images/gramado/cavalo.jpg" style={{borderRadius: '5px'}}/>
                    </div>
                    <div className="card-content">
                        <p>Passeio a Cavalo</p>
                        <p>R$ 364,00</p>
                        <hr/>
                        <button className="waves-effect waves-light btn-small" type="submit" name="action">Comprar</button>
                    </div>
                </div>
            </div>

            <div className="col s12 m4">
                <div className="card">
                    <div className="card-image">
                        <img src="images/gramado/parque.jpg"/>
                    </div>
                    <div className="card-content">
                        <p>Visita Parque do Caracol e Ecoparque</p>
                        <p>R$ 312,50</p>
                        <hr/>
                        <button className="waves-effect waves-light btn-small" type="submit" name="action">Comprar</button>
                    </div>
                </div>
            </div>

            <div className="col s12 m4">
                <div className="card">
                    <div className="card-image">
                        <img src="images/gramado/snowland.jpg"/>
                    </div>
                    <div className="card-content">
                        <p>Passeio no parque Snowland</p>
                        <p>R$ 312,00</p>
                        <hr/>
                        <button className="waves-effect waves-light btn-small" type="submit" name="action">Comprar</button>
                    </div>
                </div>
            </div>
        </div>


        <div className="row">
            <div className="col s12 m4">
                <div className="card">
                    <div className="card-image">
                        <img src="images/gramado/mariaFumaca.jpg"/>
                    </div>
                    <div className="card-content">
                        <p>Passeio Maria Fumaça</p>
                        <p>R$ 364,00</p>
                        <hr/>
                        <button className="waves-effect waves-light btn-small" type="submit" name="action">Comprar</button>
                    </div>
                </div>
            </div>

            <div className="col s12 m4">
                <div className="card">
                    <div className="card-image">
                        <img src="images/gramado/noiteDan.jpg"/>
                    </div>
                    <div className="card-content">
                        <p>Noite dançante no Bill Bar</p>
                        <p>R$ 468,50</p>
                        <hr/>
                        <button className="waves-effect waves-light btn-small" type="submit" name="action">Comprar</button>
                    </div>
                </div>
            </div>

            <div className="col s12 m4">
                <div className="card">
                    <div className="card-image">
                        <img src="images/gramado/jantarRomantico.jpg"/>
                    </div>
                    <div className="card-content">
                        <p>Jantar Romantico no Petite Maison</p>
                        <p>R$ 416,00</p>
                        <hr/>
                        <button className="waves-effect waves-light btn-small" type="submit" name="action">Comprar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

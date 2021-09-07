import React from 'react';

export default function LuaMel() {
    return (
        <div className="container">
            <br/>
            <div style={{marginLeft: '10px'}}>
                <h6 style={{fontSize: '15px'}}><b>LISTA DE PRESENTES</b></h6>
                <h4><b>Lua de Mel</b></h4>
                <p>A viagem dos sonhos começa por aqui.</p>
            </div>

            <div className="row">
                <div className="col s12 m4">
                    <div className="card">
                        <div className="card-image">
                            <img src="images/luaMel/bike.jpg" alt="bike"/>
                        </div>
                        <div className="card-content">
                            <p>Aluguel e Passeio de Bike</p>
                            <p>R$ 364,00</p>
                            <hr/>
                            <button className="waves-effect waves-light btn-small" type="submit" name="action">Comprar</button>
                        </div>
                    </div>
                </div>

                <div className="col s12 m4">
                    <div className="card">
                        <div className="card-image">
                            <img src="images/luaMel/cafedamanha.jpg" alt="cafe"/>
                        </div>
                        <div className="card-content">
                            <p>Café da Manhã</p>
                            <p>R$ 312,50</p>
                            <hr/>
                            <button className="waves-effect waves-light btn-small" type="submit" name="action">Comprar</button>
                        </div>
                    </div>
                </div>

                <div className="col s12 m4">
                    <div className="card">
                        <div className="card-image">
                            <img src="images/luaMel/brinde.jpg" alt="brinde"/>
                        </div>
                        <div className="card-content">
                            <p>Brinde a Beira-Mar</p>
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
                            <img src="images/luaMel/almoco.jpg" alt="almoço"/>
                        </div>
                        <div className="card-content">
                            <p>Almoço a Beira-Mar</p>
                            <p>R$ 364,00</p>
                            <hr/>
                            <button className="waves-effect waves-light btn-small" type="submit" name="action">Comprar</button>
                        </div>
                    </div>
                </div>

                <div className="col s12 m4">
                    <div className="card">
                        <div className="card-image">
                            <img src="images/luaMel/barco.jpg" alt="barco"/>
                        </div>
                        <div className="card-content">
                            <p>Passeio de Barco</p>
                            <p>R$ 468,50</p>
                            <hr/>
                            <button className="waves-effect waves-light btn-small" type="submit" name="action">Comprar</button>
                        </div>
                    </div>
                </div>

                <div className="col s12 m4">
                    <div className="card">
                        <div className="card-image">
                            <img src="images/luaMel/spa.jpg" alt="spa"/>
                        </div>
                        <div className="card-content">
                            <p>Massagem em SPA</p>
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
import React from 'react'

export default function NossaCasa() {
    return (
        <div className="container">
        <br/>
        <div style={{marginLeft: '10px'}}>
            <h6 style={{fontSize: '15px'}}><b>LISTA DE PRESENTES</b></h6>
            <h4><b>Nossa Casa</b></h4>
            <p>Presentes exclusivos para o lar do Amor.</p>
        </div>

        <div className="row">
            <div className="col s12 m4">
                <div className="card">
                    <div className="card-image">
                        <img src="images/nossaCs/colcha.jpg" style={{borderRadius: '5px'}}/>
                    </div>
                    <div className="card-content">
                        <p>Colcha de Casal</p>
                        <p>R$ 364,00</p>
                        <hr/>
                        <button className="waves-effect waves-light btn-small" type="submit" name="action">Comprar</button>
                    </div>
                </div>
            </div>

            <div className="col s12 m4">
                <div className="card">
                    <div className="card-image">
                        <img src="images/nossaCs/lencol.jpg"/>
                    </div>
                    <div className="card-content">
                        <p>Jogo de Lençol Casal</p>
                        <p>R$ 312,50</p>
                        <hr/>
                        <button className="waves-effect waves-light btn-small" type="submit" name="action">Comprar</button>
                    </div>
                </div>
            </div>

            <div className="col s12 m4">
                <div className="card">
                    <div className="card-image">
                        <img src="images/nossaCs/lencolKing.jpg"/>
                    </div>
                    <div className="card-content">
                        <p>Jogo de Lençol King 400 fios</p>
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
                        <img src="images/nossaCs/micro.jpg"/>
                    </div>
                    <div className="card-content">
                        <p>Microondas</p>
                        <p>R$ 364,00</p>
                        <hr/>
                        <button className="waves-effect waves-light btn-small" type="submit" name="action">Comprar</button>
                    </div>
                </div>
            </div>

            <div className="col s12 m4">
                <div className="card">
                    <div className="card-image">
                        <img src="images/nossaCs/panelas.jpg"/>
                    </div>
                    <div className="card-content">
                        <p>Jogo de Panelas Kitchen Utensils</p>
                        <p>R$ 468,50</p>
                        <hr/>
                        <button className="waves-effect waves-light btn-small" type="submit" name="action">Comprar</button>
                    </div>
                </div>
            </div>

            <div className="col s12 m4">
                <div className="card">
                    <div className="card-image">
                        <img src="images/nossaCs/fogao.jpg"/>
                    </div>
                    <div className="card-content">
                        <p>Cooktop Brastemp 4 Bocas</p>
                        <p>R$ 300,00</p>
                        <hr/>
                        <button className="waves-effect waves-light btn-small" type="submit" name="action">Comprar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

import React, { useState } from 'react'

export default function Convidados() {

    const [ nomeConvidado, setNomeConvidado ] = useState("");

    function handleFormSubmit(ev) {
        ev.preventDefault();

        const data = { nomeConvidado };

        if(data){
            alert("Boa festa " + nomeConvidado)
        }
        setNomeConvidado('')
    }
    

    return (
        <div className="container">
            <br/>
            <h4>Confirmar Presença</h4>

            <form onSubmit={handleFormSubmit} className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                        <i className="material-icons prefix">account_circle</i>
                        <label className="active"> Nome Completo</label>
                        <input  
                            type="text"
                            required 
                            className="validate"  
                            value={nomeConvidado} 
                            onChange={(event) => { setNomeConvidado(event.target.value);  }} 
                        />
                        </div>
                    </div>
                    <br/>

                    <div>
                        <button className="waves-effect waves-light btn-small" type="submit">Cadastrar
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
            </form>
        </div>
    )
}
import React from 'react'

export default function Convidados() {

    return (
        <div className="container">
                <br/>
              <table>
                <thead>
                <tr>
                    <th>Presencia</th>
                    <th>Nome</th>
                    <th>Acompanhates</th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td>
                        <label>
                            <input type="checkbox" />
                            <span>Confirmar</span>
                        </label>
                    </td>
                    <td>Soro & Vera</td>
                    <td>Bruna & Brenda</td>
                </tr>
                <tr>
                    <td>
                        <label>
                            <input type="checkbox" />
                            <span>Confirmar</span>
                        </label>
                    </td>
                    <td>Raphael & Fabiana</td>
                    <td>Gabriel & Lara</td>
                </tr>
                <tr>
                    <td>
                        <label>
                            <input type="checkbox" />
                            <span>Confirmar</span>
                        </label>
                    </td>
                    <td>Elenita & Giovanni</td>
                    <td></td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

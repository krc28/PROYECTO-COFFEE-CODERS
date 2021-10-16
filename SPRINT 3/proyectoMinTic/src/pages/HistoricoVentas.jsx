import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom' //Es necesario anexar a demás páginas

const HistoricoVentas = () => {
    const [idProducto, setIdProducto] = useState('');

    useEffect(() => {
        console.log('el valor de la variable es ', idProducto);
    }, [idProducto]);

    const enviarDatosAlBackend = () => {
        console.log('El valor de la variable IdProducto es ', idProducto);
    };

    return (
        <div className="App">
            <header className="barraNav">Módulo de ventas</header>
            <main className="contenedor">
                <section>
                    <h1 className="modulo">Histórico de ventas</h1>
                </section>
                <section className="modulo segundoMod">
                    <form>
                        <label htmlFor="idVenta">
                            Ingrese el ID de la venta
                            <input 
                                onChange={(e) => { 
                                    setIdProducto(e.target.value);
                                }} 
                                name="idVenta" 
                                type="number" 
                                placeholder="p.ej.: 18293"
                             />
                        </label>
                        <label htmlFor="idCliente">
                            Ingrese el ID del cliente
                            <input name="idCliente" type="number" placeholder="p.ej.: 39764021" />
                        </label>
                        <label htmlFor="nombreCliente">
                            Ingrese el nombre del cliente
                            <input name="nombreCliente" type="text" placeholder="p.ej.: Juan Pérez" />
                        </label>
                        <button type='button' onClick={enviarDatosAlBackend} className="mainButton" >Buscar</button>
                    </form>
                </section>
                <section className="modulo">
                    <table>
                        <thead>
                            <tr>
                                <th>ID venta</th>
                                <th>Descripción</th>
                                <th>Valor</th>
                                <th>ID Cliente</th>
                                <th>Cliente</th>
                                <th>Estado</th>
                                <th id="Actualizar">Detalles</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>13783</td>
                                <td>Descripción</td>
                                <td>320.000</td>
                                <td>39756394</td>
                                <td>Sandra Ramírez</td>
                                <td>Creación</td>
                                <td id="Actualizar"><button className="mainButton" type="submit">Actualizar</button></td>
                            </tr>
                            <tr>
                                <td>13783</td>
                                <td>Descripción</td>
                                <td>520.000</td>
                                <td>46786253</td>
                                <td>Luis Carlos Restrepo</td>
                                <td>Ruta</td>
                                <td id="Actualizar"><button className="mainButton" type="submit">Actualizar</button></td>
                            </tr>
                            <tr>
                                <td>13783</td>
                                <td>Descripción</td>
                                <td>60.000</td>
                                <td>101846372</td>
                                <td>Verónica Vargas</td>
                                <td>Entregada</td>
                                <td id="Actualizar"><button className="mainButton" type="submit">Actualizar</button></td>
                            </tr>
                            <tr>
                                <td>13783</td>
                                <td>Descripción</td>
                                <td>1.029.000</td>
                                <td>89657293</td>
                                <td>Julieta Durán</td>
                                <td>Entregada</td>
                                <td id="Actualizar"><button className="mainButton" type="submit">Actualizar</button></td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>
            <footer></footer>
        </div>
    );
}

export default HistoricoVentas;
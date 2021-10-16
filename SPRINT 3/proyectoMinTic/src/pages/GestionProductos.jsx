import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom' //Es necesario anexar a demás páginas


const productosBackend = [
    {
        id: '001',
        nombre: 'Deluxe',
        variante: 'Castilla',
        origen: 'Putumayo',
    },
    {   
        id: '002',
        nombre: 'Deluxe',
        variante: 'Castilla',
        origen: 'Putumayo',
    },
    {
        id: '003',
        nombre: 'Deluxe',
        variante: 'Castilla',
        origen: 'Putumayo',
    },
];


const GestionProductos = () => {

    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [productos, setProductos]  = useState([]);
    const [textoBoton, setTextoBotton] = useState('Registra un producto');

    useEffect(() => {
        //obtener lista de vehiculos desde el backend
        setProductos(productosBackend);
    }, []);

    useEffect(() => {
        if (mostrarTabla) {
            setTextoBotton('Registra un producto');
        } else {
            setTextoBotton('Ver todos los productos');
        }
    }, [mostrarTabla]);
    return (
        <div className="App">
            <header className="barraNav">Gestión de productos</header>
            <div className="contenedor">
                <h2 className="modulo">Registro de productos</h2>
                <button 
                    onClick={()=>{setMostrarTabla(!mostrarTabla);
                    }}
                    className="mainButton"
                >
                    {textoBoton}
                </button>
                {mostrarTabla ? (
                    <TablaProductos listaProductos={productos} />
                ) : (
                    <FormularioRegistroProductos />
                )}
            </div>
        </div>
    );
};


const TablaProductos = ({listaProductos}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID producto</th>
                    <th>Nombre del producto</th>
                    <th>Variante</th>
                    <th>Orígen</th>
                    <th id="Actualizar">Detalles</th>
                </tr>
            </thead>
            <tbody>
                {listaProductos.map((producto) => {
                    return (
                        <tr>
	                        <td>{producto.id}</td>
	                        <td>{producto.nombre}</td>
	                        <td>{producto.variante}</td>
	                        <td>{producto.origen}</td>
	                        <td id="Actualizar"><button className="mainButton" type="submit">Actualizar</button></td>
	                    </tr>
                    );
                })}
	        </tbody>
        </table>
    );
};


const FormularioRegistroProductos = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <h2 className='text-2x1 font-extrabold text-gray-800'>Registra un producto</h2>
            <form className='grid-grid-cols-2'>
                <input className='bg-gray-50 border border-gray-600 p2 rounded-lg m-2' type='text' />
                <input className='bg-gray-50 border border-gray-600 p2 rounded-lg m-2' type='text' />
                <input className='bg-gray-50 border border-gray-600 p2 rounded-lg m-2' type='text' />
                <button className='col-span-2 bg-green-400 p-2 rounded-full shadow-md hover:bg-green-600 text-white'>
                    Guardar producto
                </button>
            </form>
        </div>
    );
};

export default GestionProductos;
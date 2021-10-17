import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom' //Es necesario anexar a demás páginas
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const productosBackend = [
    {
        id: '001',
        nombre: 'Deluxe',
        linea: 'Premium',
        variante: 'Castilla',
        origen: 'Putumayo',
        precio: 27000,
    },
    {   
        id: '002',
        nombre: 'Primavera',
        linea: 'Hogar',
        variante: 'Castilla',
        origen: 'Putumayo',
        precio: 15000,
    },
    {
        id: '003',
        nombre: 'Doña Luisa',
        linea: "Sensacion",
        variante: 'Castilla',
        origen: 'Putumayo',
        precio: 19000,
    },
];


const GestionProductos = () => {

    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [productos, setProductos]  = useState([]);
    const [textoBoton, setTextoBoton] = useState('Registra un producto');
    const [colorBoton, setColorBoton] = useState('green');

    useEffect(() => {
        //obtener lista de vehiculos desde el backend
        setProductos(productosBackend);
    }, []);

    useEffect(() => {
        if (mostrarTabla) {
            setTextoBoton('Registra un producto');
            setColorBoton('green');
        } else {
            setTextoBoton('Ver todos los productos');
            setColorBoton('red');
        }
    }, [mostrarTabla]);
    return (
        <body>
            <header className="barraNav">Gestión de productos</header>
            <div className='bg-gris'>
                <Ensayo />
                <h2 className="bg-blanco text-2x1 font-bold leading-tight font-mono" >Registro de productos</h2>
                <button 
                    onClick={()=>{setMostrarTabla(!mostrarTabla);
                    }}
                    className={`bg-${colorBoton}-500 p-5`}
                >
                    {textoBoton}
                </button>
                {mostrarTabla ? (
                    <TablaProductos listaProductos={productos} />
                ) : (
                    <FormularioRegistroProductos />
                )}
                <ToastContainer
                    position="bottom-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </div>
        </body>
    );
};


const TablaProductos = ({listaProductos}) => {
    return (
        <div className='bg-ensayo'>
            <table>
                <thead>
                    <tr>
                        <th>ID producto</th>
                        <th>Nombre del producto</th>
                        <th>Linea</th>
                        <th>Variante</th>
                        <th>Orígen</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {listaProductos.map((producto) => {
                        return (
                            <tr>
                                <td>{producto.id}</td>
                                <td>{producto.nombre}</td>
                                <td>{producto.linea}</td>
                                <td>{producto.variante}</td>
                                <td>{producto.origen}</td>
                                <td>{producto.precio}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};


const Ensayo = () => {
    return (
        <div>
            <div className='bg-green-900'>Hola mundo</div>
        </div>
    );
};

const FormularioRegistroProductos = () => {
    const [id, setId] = useState()
    const [nombre, setNombre] = useState()
    const [linea, setLinea] = useState()
    const [variante, setVariante] = useState()
    const [origen, setOrigen] = useState()
    const [precio, setPrecio] = useState()

    const enviarAlBackend = () => {
        console.log('Id', id, 'Nombre', nombre, 'Linea', linea, 'Variante', variante, 'Origen', origen, 'Precio', precio);
        toast.succes('¡Su producto ha sido registrado exitosamente!');
    }   

    return (
        <div className='flex flex-col items-center justify-center'>
            <h3 className='text-2x1 font-extrabold text-gray-800'>Registra un producto</h3>
            <form className='flex flex-col'>
                <label className='flex flex-col' htmlFor='id'>
                    ID
                    <input 
                    name='id'
                        className='bg-gray border border-gray-600 p2 rounded-lg m-2' 
                        type='text' 
                        placeholder='08937'
                        value={id} 
                        onChange={(e) => {
                        setId(e.target.value);
                    }}
                    />
                </label>
                <label className='flex flex-col' htmlFor='nombre'>
                    Nombre
                    <input 
                        name='nombre'
                        className='bg-gray border border-gray-600 p2 rounded-lg m-2' 
                        type='text' 
                        placeholder='Juan Valtez'
                        value={nombre} 
                        onChange={(e) => {
                            setNombre(e.target.value);
                        }} 
                    />
                </label>
                <label className='flex flex-col' htmlFor='linea'>
                    Linea
                    <select
                        name='linea'
                        className='bg-gray border border-gray-600 p2 rounded-lg m-2'
                        value={linea} 
                        onChange={(e) => {
                            setLinea(e.target.value);
                        }}  
                    >
                        <option disable>Seleccione una linea</option>
                        <option>Premium</option>
                        <option>Hogar</option>
                        <option>Sensacion</option>
                    </select>
                </label>
                <label className='flex flex-col' htmlFor='variante'>
                    Variante
                    <select           
                        name='variante' 
                        className='bg-gray border border-gray-600 p2 rounded-lg m-2'
                        value={variante} 
                        onChange={(e) => {
                            setVariante(e.target.value);
                        }}  
                    >
                        <option disable>Seleccione una variante</option>
                        <option>Arabica</option>
                        <option>Robusta</option>
                        <option>Liberica</option>
                        <option>Excelsa</option>
                    </select>
                </label>    
                <label className='flex flex-col' htmlFor='origen'>
                    Origen
                    <input 
                        name='origen'
                        className='bg-gray border border-gray-600 p2 rounded-lg m-2' 
                        type='text' 
                        placeholder='Putumayo'
                        value={origen} 
                        onChange={(e) => {
                            setOrigen(e.target.value);
                        }}  
                    />
                </label>       
                <label className='flex flex-col' htmlFor='precio'>
                    Precio
                    <input 
                        name='precio'
                        className='bg-gray border border-gray-600 p2 rounded-lg m-2' 
                        type='text' 
                        placeholder='30000'
                        value={precio} 
                        onChange={(e) => {
                            setPrecio(e.target.value);
                        }}  
                    />
                </label>  
                <button 
                    type='button' 
                    className='col-span-2 bg-green-400 p-2 rounded-full shadow-md hover:bg-green-600 text-white'
                    onClick={()=>{enviarAlBackend();
                    }}
                >
                    Guardar producto
                </button>
            </form>
        </div>
    );
};

export default GestionProductos;
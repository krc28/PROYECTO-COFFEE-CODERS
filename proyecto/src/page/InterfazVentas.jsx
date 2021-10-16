import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState, useRef } from 'react';
import IconoVentas from 'media/IconoVentas.png';
import { ToastContainer, toast } from 'react-toastify';

const ventasBackend = [

    {
        iD: 1120,
        valortotal: 5000,
        descripcionDeLaVenta: 'se venden x productos nuevos, con garantìa de x tiempo,etc.',
        fechaInicialDePago: "20-01-2022",
        fechaFuturaDePago: "20-02-2022",
        vendedorEncargadoDeLaVenta: 'Carla B',
    },
    {
        iD: 1121,
        valortotal: 4000,
        descripcionDeLaVenta: 'se venden x productos nuevos, con garantìa de x tiempo,etc.',
        fechaInicialDePago: "10-01-2022",
        fechaFuturaDePago: "10-02-2022",
        vendedorEncargadoDeLaVenta: 'Maria C',
    },
    {
        iD: 1122,
        valortotal: 2000,
        descripcionDeLaVenta: 'se venden x productos nuevos, con garantìa de x tiempo,etc.',
        fechaInicialDePago: "05-01-2022",
        fechaFuturaDePago: "05-02-2022",
        vendedorEncargadoDeLaVenta: 'Juan D',
    },
]

const Ventas=()=>{
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [ventas, setVentas] = useState([]);
    const [textoBoton, setTextoBoton] = useState('Crear Nueva Venta');

    useEffect(() => {
        setVentas(ventasBackend);
      }, []);

    useEffect(() => {
        if (mostrarTabla) {
          setTextoBoton('Crear Nueva Venta');
        } else {
          setTextoBoton('Listar Ventas');
        }
      }, [mostrarTabla]);

    return(
        <div>
            <h2 className='font-bold text-4xl text-center text-gray-800 my-2'>Administración de Ventas</h2>
            <div align='right'>
                <button onClick={() => {setMostrarTabla(!mostrarTabla);}}
                        className={`text-white font-bold bg-green-500 p-5 rounded-full m-6 w-28 self-end`}>
                    {textoBoton}
                </button>
            </div>
            {mostrarTabla ? (
            <TablaVentas listaVentas={ventas} />
        ) : (
            <RegistroVentas
            setMostrarTabla={setMostrarTabla}
	    listaVentas={ventas}
            setVentas={setVentas}
            />
        )}
        <ToastContainer position='bottom-center' autoClose={5000} />     
        </div>
    )

}


const RegistroVentas=({setMostrarTabla, listaVentas, setVentas})=>{

    const form = useRef(null);

    const submitForm = async(e) => {
        e.preventDefault();
        const regventas = new FormData(form.current);

        const nuevaVenta = {};
            regventas.forEach((value, key) => {
            nuevaVenta[key] = value;
            });
        
        setMostrarTabla(true)    
        toast.success('Venta agregada con éxito');
        setUsuarios([...listaVentas, nuevaVenta]);
    }

    return(
            <div className='flex flex-col items-center justify-center'>   
             <img src={IconoVentas} alt='imagen' className='h-40 w-auto my-7 rounded-full' />   
            <form ref={form} onSubmit={submitForm} className='flex flex-col'>
                <h1 className='font-bold text-2xl text-blue-500 my-5 text-center'> Registro de Ventas</h1>
                <div className='flex flex-row'>
                <label className='flex flex-col mx-5' htmlFor='iD'> 
                    Ingrese su Identificador único de venta
                    <input 
                        name='iD' 
                        className='bg-gray-50 border border-blue-600 p-2 rounded-lg my-2 w-50'
                        type='number' 
                        placeholder='1120' 
                        required/>
                </label>
                <label className='flex flex-col' htmlFor='valorTotal'> 
                    Ingrese el valor total de la venta
                    <input 
                        name='valorTotal' 
                        className='bg-gray-50 border border-blue-600 p-2 rounded-lg my-2 w-50'
                        type='number' 
                        placeholder='5000' 
                        required/>
                </label>
                </div>
                <div className='flex flex-row'>
                <label className='flex flex-col mx-5' htmlFor='descripcionDeLaVenta'> 
                    Ingrese la descripción de la venta
                    <input 
                        name='descripcionDeLaVenta' 
                        className='bg-gray-50 border border-blue-600 p-2 rounded-lg my-2 w-50'
                        type='text' 
                        placeholder='Producto nuevo, tiempo de garantía, etc.' 
                        required/>
                </label>
                <label className='flex flex-col' htmlFor='fechaInicialDePago'> 
                    Ingrese la fecha inicial de pago 
                    <input 
                        name='fechaInicialDePago' 
                        className='bg-gray-50 border border-blue-600 p-2 rounded-lg my-2 w-50'
                        type='text' 
                        placeholder='20-01-2022' />
                </label>
                <label className='flex flex-col' htmlFor='fechaFuturaDePago'> 
                    Ingrese la fecha futura de pago 
                    <input 
                        name='fechaFuturaDePago' 
                        className='bg-gray-50 border border-blue-600 p-2 rounded-lg my-2 w-50'
                        type='text' 
                        placeholder='20-02-2022' />
                </label>
                <label className='flex flex-col' htmlFor='vendedorEncargadoDeLaVenta'> 
                    Ingrese el nombre del vendedor encargado de la venta
                    <input 
                        name='vendedorEncargadoDeLaVenta' 
                        className='bg-gray-50 border border-blue-600 p-2 rounded-lg my-2 w-50'
                        type='text' 
                        placeholder='Maria C' />
                </label>
                </div>
                                
            <div className='my-4' align='center'>
              <button type='submit'className='bg-blue-400 text-white font-bold rounded-full p-2'>Guardar Datos</button>
            </div>
        </form>
        </div>  
        
    )
}

const TablaVentas=({listaVentas})=>{

    return(
            <div className='flex flex-col items-center justify-center'>
                <h1 className='font-bold text-4xl text-blue-500 my-5 text-center'> Listado de Ventas</h1>
                <table className='border border-green-500 table-auto'>
                    <thead>
                    <tr>
                        <th className='border border-blue-600'>iD</th>
                        <th className='border border-blue-600'>valorTotal</th>
                        <th className='border border-blue-600'>descripcionDeLaVenta</th>
                        <th className='border border-blue-600'>fechaInicialDePago</th>
                        <th className='border border-blue-600'>fechaFuturaDePago</th>
                        <th className='border border-blue-600'>vendedorEncargadoDeLaVenta</th>
                    </tr>
                    </thead>
                    <tbody>
                        {listaVentas.map((ventas) => {
                        return (
                        <tr>
                            <td>{ventas.iD}</td>
                            <td>{ventas.valortotal}</td>
                            <td>{ventas.descripcionDeLaVenta}</td>
                            <td>{ventas.fechaInicialDePago}</td>
                            <td>{ventas.fechaFuturaDePago}</td>
                            <td>{ventas.vendedorEncargadoDeLaVenta}</td>
                        </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
    )
}

export default Usuarios;
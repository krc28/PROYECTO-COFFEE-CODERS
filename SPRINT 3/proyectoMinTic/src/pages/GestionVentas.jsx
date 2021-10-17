import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState, useRef } from 'react';
import IconoVentas from 'media/IconoVentas.png';
import { ToastContainer, toast } from 'react-toastify';

const ventasBackend = [

    {
        iD: 1120,
        total: 5000,
        descripcion: 'garantìa,etc.',
        fechaPago: "20-01-2022",
        fechaFutura: "20-02-2022",
        vendedor: 'Carla B',
    },
    {
        iD: 1121,
        total: 4000,
        descripcion: 'garantìa,etc.',
        fechaPago: "10-01-2022",
        fechaFutura: "10-02-2022",
        vendedor: 'Maria C',
    },
    {
        iD: 1122,
        total: 2000,
        descripcion: 'garantìa,etc.',
        fechaPago: "05-01-2022",
        fechaFutura: "05-02-2022",
        vendedor: 'Juan D',
    },
]

const GestionVentas=()=>{
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
        setVentas([...listaVentas, nuevaVenta]);
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
                <label className='flex flex-col' htmlFor='total'> 
                    Ingrese el valor total de la venta
                    <input 
                        name='total' 
                        className='bg-gray-50 border border-blue-600 p-2 rounded-lg my-2 w-50'
                        type='number' 
                        placeholder='5000' 
                        required/>
                </label>
                </div>
                <div className='flex flex-row'>
                <label className='flex flex-col mx-5' htmlFor='descripcion'> 
                    Ingrese la descripción de la venta
                    <input 
                        name='descripcion' 
                        className='bg-gray-50 border border-blue-600 p-2 rounded-lg my-2 w-50'
                        type='text' 
                        placeholder='Garantía, etc.' 
                        required/>
                </label>
                <label className='flex flex-col' htmlFor='fechaPago'> 
                    Ingrese la fecha inicial de pago 
                    <input 
                        name='fechaPago' 
                        className='bg-gray-50 border border-blue-600 p-2 rounded-lg my-2 w-50'
                        type='text' 
                        placeholder='20-01-2022' />
                </label>
                <label className='flex flex-col' htmlFor='fechaFutura'> 
                    Ingrese la fecha futura de pago 
                    <input 
                        name='fechaFutura' 
                        className='bg-gray-50 border border-blue-600 p-2 rounded-lg my-2 w-50'
                        type='text' 
                        placeholder='20-02-2022' />
                </label>
                <label className='flex flex-col' htmlFor='vendedor'> 
                    Ingrese el nombre del vendedor encargado de la venta
                    <input 
                        name='vendedor' 
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
                        <th className='border border-blue-600'>total</th>
                        <th className='border border-blue-600'>descripcion</th>
                        <th className='border border-blue-600'>fechaPago</th>
                        <th className='border border-blue-600'>fechaFutura</th>
                        <th className='border border-blue-600'>vendedor</th>
                    </tr>
                    </thead>
                    <tbody>
                        {listaVentas.map((ventas) => {
                        return (
                        <tr>
                            <td>{ventas.iD}</td>
                            <td>{ventas.valor}</td>
                            <td>{ventas.descripcion}</td>
                            <td>{ventas.fechaPago}</td>
                            <td>{ventas.fechaFutura}</td>
                            <td>{ventas.vendedor}</td>
                        </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
    )
}

export default GestionVentas;
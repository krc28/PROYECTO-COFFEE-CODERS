import 'react-toastify/dist/ReactToastify.css';
import 'styles/EstiloGestionVentas.css';
import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import IconoVentas from 'media/IconoVentas.png';
import { ToastContainer, toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import axios from 'axios';


const GestionVentas=()=>{
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [ventas, setVentas] = useState([]);
    const [textoBoton, setTextoBoton] = useState('Crear Nueva Venta');
    const [consulta, setConsulta] = useState(true);

    const getToken =()=>{
        return `Bearer ${localStorage.getItem('token')}`;
    }

    useEffect(() => {
        const obtenerGestionVentas = async ()=>{
            const options = {
                method: 'GET',
                url: 'http://localhost:5000/ventas/',
                headers: {'Content-Type': 'application/json', Authorization: getToken()}
              };
             await axios.request(options).then(function (response) {
                setVentas(response.data);
              }).catch(function (error) {
                console.error(error);
              });
        };
        if (consulta){
            obtenerGestionVentas();
            setConsulta(false);
        }
    }, [consulta]);

    useEffect(()=>{
        if (mostrarTabla){
            setConsulta(true);
        }
    },[mostrarTabla]);
      
    useEffect(() => {
        if (mostrarTabla) {
          setTextoBoton('Crear Nueva Venta');
        } else {
          setTextoBoton('Listar Ventas');
        }
      }, [mostrarTabla]);

    return(
        <div>
            <h2 className='font-bold text-4xl text-center text-violet-800 my-2'>Administración de Ventas</h2>
            <div align='right'>
                <button onClick={() => {setMostrarTabla(!mostrarTabla);}}
                        className={`text-white font-bold bg-green-500 p-5 rounded-full m-6 w-28 self-end`}>
                    {textoBoton}
                </button>
            </div>
            {mostrarTabla ? (
            <TablaVentas listaVentas={ventas} setConsulta={setConsulta} getToken={getToken} />
        ) : (
            <RegistroVentas
            setMostrarTabla={setMostrarTabla}
	        listaVentas={ventas}
            setVentas={setVentas}
            getToken={getToken}
            />
        )}
        <ToastContainer position='bottom-center' autoClose={5000} />     
        </div>
    )

}


const RegistroVentas=({setMostrarTabla, listaVentas, setVentas, getToken})=>{

    const form = useRef(null);

    const submitForm = async(e) => {
        e.preventDefault();
        const regventas = new FormData(form.current);

        const nuevaVenta = {};
            regventas.forEach((value, key) => {
            nuevaVenta[key] = value;
            });

            const options = {
                method: 'POST',
                url: 'http://localhost:5000/ventas/',
                headers: { 'Content-Type': 'application/json', Authorization: getToken() },
                data: { iD: nuevaVenta.iD, total: nuevaVenta.total, descripcion: nuevaVenta.descripcion, fechaPago: nuevaVenta.fechaPago, fechaFutura: nuevaVenta.fechaFutura, vendedor: nuevaVenta.vendedor},
                };
                  
            await axios
                .request(options)
                .then(function (response) {
                    console.log(response.data);
                    toast.success('Venta añadida con éxito');
                })
                .catch(function (error) {
                    console.error(error);
                    toast.error('Error creando la venta');
                });

            setMostrarTabla(true)        
            setVentas([...listaVentas, nuevaVenta]);              
        
    }

    return(
            <div className='flex flex-col items-center justify-center'>   
             <img src={IconoVentas} alt='imagen' className='h-40 w-auto my-7 rounded-full' />   
            <form ref={form} onSubmit={submitForm} className='flex flex-col'>
                <h1 className='font-bold text-2xl text-green-500 my-5 text-center'> Registro de Ventas</h1>
                <div className='flex flex-row'>
                <label className='flex flex-col mx-5' htmlFor='iD'> 
                    Ingrese su ID único de venta
                    <input 
                        name='iD' 
                        className='bg-violet-50 border border-green-600 p-2 rounded-lg my-2 w-50'
                        type='number' 
                        placeholder='1120' 
                        required/>
                </label>
                <label className='flex flex-col' htmlFor='total'> 
                Escriba el total de la venta
                    <input 
                        name='total' 
                        className='bg-violet-50 border border-green-600 p-2 rounded-lg my-2 w-50'
                        type='number' 
                        placeholder='5000' 
                        required/>
                </label>
                </div>
                <div className='flex flex-row'>
                <label className='flex flex-col mx-5' htmlFor='descripcion'> 
                Descripción de la venta
                    <input 
                        name='descripcion' 
                        className='bg-violet-50 border border-green-600 p-2 rounded-lg my-2 w-50'
                        type='text' 
                        placeholder='Garantía, etc.' 
                        required/>
                </label>
                <label className='flex flex-col' htmlFor='fechaPago'> 
                    Fecha inicial de pago 
                    <input 
                        name='fechaPago' 
                        className='bg-violet-50 border border-green-600 p-2 rounded-lg my-2 w-50'
                        type='text' 
                        placeholder='20-01-2022' />
                </label>
                <label className='flex flex-col' htmlFor='fechaFutura'> 
                    Fecha futura de pago 
                    <input 
                        name='fechaFutura' 
                        className='bg-violet-50 border border-green-600 p-2 rounded-lg my-2 w-50'
                        type='text' 
                        placeholder='20-02-2022' />
                </label>
                <label className='flex flex-col' htmlFor='vendedor'> 
                    Escriba nombre del vendedor 
                    <input 
                        name='vendedor' 
                        className='bg-violet-50 border border-green-600 p-2 rounded-lg my-2 w-50'
                        type='text' 
                        placeholder='Maria C' />
                </label>
                </div>
                                
            <div className='my-4' align='center'>
              <button type='submit'className='bg-green-400 text-white font-bold rounded-full p-2'>Guardar Datos</button>
            </div>
        </form>
        </div>  
        
    )
}

const TablaVentas=({listaVentas, setConsulta, getToken})=>{

    const [buscar, setBuscar] = useState('');
    const [datoFiltrado, setDatoFiltrado] = useState(listaVentas)

    useEffect(()=>{
        setDatoFiltrado(
            listaVentas.filter((elemento)=>{
                return JSON.stringify(elemento).toLowerCase().includes(buscar.toLowerCase());
            })
        )
    },[buscar, listaVentas]);

    return(
            <div className='flex flex-col items-center justify-center'>
                <h1 className='font-bold text-4xl text-green-500 my-5 text-center'> Listado de Ventas</h1>
                <input placeholder='Buscar'
                value={buscar}
                onChange={(e)=>setBuscar(e.target.value)}
                className= 'border-2 border-green-700 px-3 py-1 rounded-md focus:outline-none focus:border-green-500'
                />
                < table className='tabla border border-green-500 table-auto'>
                    <thead>
                    <tr>
                        <th className='border border-green-600'>ID</th>
                        <th className='border border-green-600'>Total</th>
                        <th className='border border-green-600'>Descripcion de la venta</th>
                        <th className='border border-green-600'>Fecha de Pago</th>
                        <th className='border border-green-600'>Fecha Futura de Pago</th>
                        <th className='border border-green-600'>Vendedor</th>
                    </tr>
                    </thead>
                    <tbody>
                        {datoFiltrado.map((ventas) => {
                        return (
                            <FilaVentas key={nanoid()} ventas={ventas} setConsulta={setConsulta} getToken={getToken}/>
                            );
                    })}
                        </tbody>
                </table>
            </div>
    )
}

const FilaVentas = ({ventas, setConsulta, getToken})=>{

    const [editar, setEditar] = useState(false);
    const [infoEditarVentas, setInfoEditarVentas] = useState({   

        iD:ventas.iD, 
        total:ventas.total,
        descripcion:ventas.descripcion, 
        fechaPago:ventas.fechaPago, 
        fechaFutura:ventas.fechaFutura, 
        vendedor:ventas.vendedor

    })

    const actualizarVentas = async ()=>{
        const options = {
            method: 'PATCH',
            url: `http://localhost:5000/ventas/${ventas._id}`,
            headers: {'Content-Type': 'application/json', Authorization: getToken()},
            data: { ...infoEditarVentas },
          };
          
          await axios.request(options).then(function (response) {
            console.log(response.data);
            toast.success('Venta modificada con éxito');
            setConsulta(true);
          }).catch(function (error) {
            toast.error('Error modificando los datos de la venta');
            console.error(error);
          });

    }

    return(
        <tr>
        {editar ? (
            <>
            <td>
                <input type='text' value={infoEditarVentas.iD} onChange={(e)=>setInfoEditarVentas({...infoEditarVentas, iD:e.target.value})} />
            </td>
            <td>
                <input type='text' value={infoEditarVentas.total} onChange={(e)=>setInfoEditarVentas({...infoEditarVentas, total:e.target.value})}/>
            </td>
            <td>
                <input type='text' value={infoEditarVentas.descripcion} onChange={(e)=>setInfoEditarVentas({...infoEditarVentas, descripcion:e.target.value})}/>
            </td>
            <td>
                <input type='text' value={infoEditarVentas.fechaPago} onChange={(e)=>setInfoEditarVentas({...infoEditarVentas, fechaPago:e.target.value})}/>
            </td>
            <td>
                <input type='text' value={infoEditarVentas.fechaFutura} onChange={(e)=>setInfoEditarVentas({...infoEditarVentas, fechaFutura:e.target.value})}/>
            </td>
            <td>
                <input type='text' value={infoEditarVentas.vendedor} onChange={(e)=>setInfoEditarVentas({...infoEditarVentas, vendedor:e.target.value})}/>
            </td>
            </>
        ):(
            <>
            <td>{ventas.iD}</td>
            <td>{ventas.total}</td>
            <td>{ventas.descripcion}</td>
            <td>{ventas.fechaPago}</td>
            <td>{ventas.fechaFutura}</td>
            <td>{ventas.vendedor}</td>
            </>
        )}
        <td>
            <div className='flex items-center justify-center'>
            {editar ? (
                <FontAwesomeIcon onClick={()=>actualizarVentas() } icon={faUserCheck} className='text-green-400 hover:text-violet-900' />
            ):(
                <FontAwesomeIcon onClick={()=>setEditar(!editar)} icon={faUserEdit} className='text-green-400 hover:text-violet-900' />
            )} 
            </div>
        </td>
        </tr>       
    )
}

export default GestionVentas;
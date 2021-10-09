import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState, useRef } from 'react';
import IconoUsuarios from 'media/IconoAdminUsuarios.jpg';
import { ToastContainer, toast } from 'react-toastify';

const usuariosBackend = [

    {
        documento: '1134763965',
        nombre: 'Isabel Duque Abad',
        correo: 'isada12@gmail.com',
        telefono: '3015784532',
        estado: 'Pendiente',
        rol: 'Vendedor',
    },
    {
        documento: '433795135',
        nombre: 'Gustavo Rojas Niño',
        correo: 'gus48@gmail.com',
        telefono: '3127895645',
        estado: 'Pendiente',
        rol: 'Vendedor',
    },
    {
        documento: '1159342768',
        nombre: 'Andrea Monsalve Tirado',
        correo: 'monsalvetirado@gmail.com',
        telefono: '3046579123',
        estado: 'Pendiente',
        rol: 'Vendedor',
    },
]

const Usuarios=()=>{
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [usuarios, setUsuarios] = useState([]);
    const [textoBoton, setTextoBoton] = useState('Crear Nuevo Usuario');

    useEffect(() => {
        setUsuarios(usuariosBackend);
      }, []);

    useEffect(() => {
        if (mostrarTabla) {
          setTextoBoton('Crear Nuevo Usuario');
        } else {
          setTextoBoton('Listar Usuarios');
        }
      }, [mostrarTabla]);

    return(
        <div>
            <h2 className='font-bold text-4xl text-center text-gray-800 my-2'>Administración de Usuarios</h2>
            <div align='right'>
                <button onClick={() => {setMostrarTabla(!mostrarTabla);}}
                        className={`text-white font-bold bg-green-500 p-5 rounded-full m-6 w-28 self-end`}>
                    {textoBoton}
                </button>
            </div>
            {mostrarTabla ? (
            <TablaUsuarios listaUsuarios={usuarios} />
        ) : (
            <RegistroUsuarios
            setMostrarTabla={setMostrarTabla}
	    listaUsuarios={usuarios}
            setUsuarios={setUsuarios}
            />
        )}
        <ToastContainer position='bottom-center' autoClose={5000} />     
        </div>
    )

}


const RegistroUsuarios=({setMostrarTabla, listaUsuarios, setUsuarios})=>{

    const form = useRef(null);

    const submitForm = async(e) => {
        e.preventDefault();
        const regusuarios = new FormData(form.current);

        const nuevoUsuario = {};
            regusuarios.forEach((value, key) => {
            nuevoUsuario[key] = value;
            });
        
        setMostrarTabla(true)    
        toast.success('Usuario agregado con éxito');
        setUsuarios([...listaUsuarios, nuevoUsuario]);
    }

    return(
            <div className='flex flex-col items-center justify-center'>   
             <img src={IconoUsuarios} alt='imagen' className='h-40 w-auto my-7 rounded-full' />   
            <form ref={form} onSubmit={submitForm} className='flex flex-col'>
                <h1 className='font-bold text-2xl text-blue-500 my-5 text-center'> Registro de Usuarios</h1>
                <div className='flex flex-row'>
                <label className='flex flex-col mx-5' htmlFor='documento'> 
                    Ingrese su Documento 
                    <input 
                        name='documento' 
                        className='bg-gray-50 border border-blue-600 p-2 rounded-lg my-2 w-50'
                        type='number' 
                        placeholder='1153763237' 
                        required/>
                </label>
                <label className='flex flex-col' htmlFor='nombre'> 
                    Ingrese su Nombre 
                    <input 
                        name='nombre' 
                        className='bg-gray-50 border border-blue-600 p-2 rounded-lg my-2 w-50'
                        type='text' 
                        placeholder='Ana Giraldo Cardona' 
                        required/>
                </label>
                </div>
                <div className='flex flex-row'>
                <label className='flex flex-col mx-5' htmlFor='correo'> 
                    Ingrese su Correo
                    <input 
                        name='correo' 
                        className='bg-gray-50 border border-blue-600 p-2 rounded-lg my-2 w-50'
                        type='email' 
                        placeholder='anagc21@gmail.com' 
                        required/>
                </label>
                <label className='flex flex-col' htmlFor='telefono'> 
                    Ingrese su Teléfono 
                    <input 
                        name='telefono' 
                        className='bg-gray-50 border border-blue-600 p-2 rounded-lg my-2 w-50'
                        type='number' 
                        placeholder='3127642342' />
                </label>
                </div>
                <div className='flex flex-row'>
                <label className='flex flex-col mx-5' htmlFor='estado'>
                    Ingrese su Estado
                    <select
                        className='bg-gray-50 border border-blue-600 p-2 rounded-lg my-2 w-50'
                        name='estado'
                        defaultValue={0}>

                        <option disabled value={0}>Seleccione una opción</option>
                        <option>Pendiente</option>
                        <option>Autorizado</option>
                        <option>No Autorizado</option>
                    </select>
                </label>
                <label className='flex flex-col' htmlFor='rol'>
                    Ingrese su Rol
                    <select
                        className='bg-gray-50 border border-blue-600 p-2 rounded-lg my-2 w-50'
                        name='rol'
                        defaultValue={0}>

                        <option disabled value={0}>Seleccione una opción</option>
                        <option>Administrador</option>
                        <option>Vendedor</option>
                    </select>
                </label>
                </div>
                
            <div className='my-4' align='center'>
              <button type='submit'className='bg-blue-400 text-white font-bold rounded-full p-2'>Guardar Datos</button>
            </div>
        </form>
        </div>  
        
    )
}

const TablaUsuarios=({listaUsuarios})=>{

    return(
            <div className='flex flex-col items-center justify-center'>
                <h1 className='font-bold text-4xl text-blue-500 my-5 text-center'> Listado de Usuarios</h1>
                <table className='border border-green-500 table-auto'>
                    <thead>
                    <tr>
                        <th className='border border-blue-600'>Documento</th>
                        <th className='border border-blue-600'>Nombre</th>
                        <th className='border border-blue-600'>Correo</th>
                        <th className='border border-blue-600'>Teléfono</th>
                        <th className='border border-blue-600'>Estado</th>
                        <th className='border border-blue-600'>Rol</th>
                    </tr>
                    </thead>
                    <tbody>
                        {listaUsuarios.map((usuarios) => {
                        return (
                        <tr>
                            <td>{usuarios.documento}</td>
                            <td>{usuarios.nombre}</td>
                            <td>{usuarios.correo}</td>
                            <td>{usuarios.telefono}</td>
                            <td>{usuarios.estado}</td>
                            <td>{usuarios.rol}</td>
                        </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
    )
}

export default Usuarios;
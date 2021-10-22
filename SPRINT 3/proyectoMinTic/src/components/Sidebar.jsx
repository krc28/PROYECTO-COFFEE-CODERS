import React from 'react';
import { Link } from 'react-router-dom';
import useActiveRoute from 'hooks/useActiveRoute';
import ImagenSidebar from './ImagenSidebar';
import { useAuth0 } from "@auth0/auth0-react";


const Sidebar = () => {
  const { user, logout } = useAuth0();

  const cerrarSesion = () => {
    logout({ returnTo: 'https://localhost:3000/Login' });
    localStorage.setItem('token', null);
  };

  return (
    <nav className='hidden lg:flex lg:w-72 border border-gray-300 h-full flex-col bg-gray-100 p-4 sidebar'>
        {/* <Link to='/Login'> */}
          <ImagenSidebar />
        {/* </Link> */}

        <div>
          <Ruta  ruta='/InterfazUsuarios' nombre='Perfil' usuario={user} />
        </div>

        <div className='my-4'>
          
          <Ruta icono='' ruta='/InterfazUsuarios' nombre='Usuarios' />
          <Ruta icono='' ruta='/GestionVentas' nombre='Ventas' />
          <Ruta icono='' ruta='/GestionProductos' nombre='Productos' />
          {/* <Ruta icono='' ruta='/Login' nombre='Login' /> */}
        </div>
        <button
          onClick={() => logout({ returnTo: window.location.origin })}
          className='bg-indigo-500 p-1 text-white rounded-md shadow-md hover:bg-red-400'
        >
          Cerrar Sesión
        </button>
      </nav>
  );
};

const Ruta = ({ icono, ruta, nombre, usuario }) => {
  const isActive = useActiveRoute(ruta);
  return (
    <Link to={ruta}>
      <button
        className={`p-1 my-2  bg-${
          isActive ? 'indigo' : 'gray'
        }-700 hover:bg-indigo-900 flex w-full items-center text-white rounded-md`}
      >
        {usuario ? (
          <>
          <img src={usuario.picture} className='h-5 w-5 rounded-full' />
            {usuario.name}</>
        ) : (
          <>
            <i className={`${icono} w-10`} />
             {nombre}
          </>
        )}
                
      </button>
    </Link>
  );
};

export default Sidebar;

import React from 'react';
import ImagenLogo from './ImagenLogo';
import { Link } from 'react-router-dom';
import useActiveRoute from 'hooks/useActiveRoute';

const Sidebar = () => {
  return (
    <nav className='hidden lg:flex lg:w-72 border border-gray-300 h-full flex-col bg-gray-200 p-4 sidebar'>
      <Link to='/Login'>
        <ImagenLogo />
      </Link>

      <div className='my-4'>
        <Ruta icono='fas fa-user' ruta='/pages/InterfazUsuarios' nombre='Usuarios' />
        <Ruta icono='fas fa-car' ruta='/pages/InterfazUsuarios' nombre='Ventas' />
        <Ruta icono='fas fa-cash-register' ruta='/pages/InterfazUsuarios' nombre='Productos' />
        <Ruta icono='fas fa-users' ruta='/pages/InterfazUsuarios' nombre='Login' />
      </div>
      <button>Cerrar Sesión</button>
    </nav>
  );
};

const Ruta = ({ icono, ruta, nombre }) => {
  const isActive = useActiveRoute(ruta);
  return (
    <Link to={ruta}>
      <button
        className={`p-1 my-2  bg-${
          isActive ? 'indigo' : 'gray'
        }-700 hover:bg-indigo-900 flex w-full items-center text-white rounded-md`}
      >
        <i className={`${icono} w-10`} />
        {nombre}
      </button>
    </Link>
  );
};

export default Sidebar;

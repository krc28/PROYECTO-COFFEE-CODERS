import React from 'react';


const Login = () => {
  return (
    <div className='flex flex-col w-full justify-center items-center'>
      <h2 className='m-3 text-center text-3xl font-extrabold text-gray-900'>
        Inicia sesión en tu cuenta
      </h2>
      <form className='mt-8 max-w-md'>
        <div>
          <input
            className='appearance-none rounded-none relative block w-full px-3 py-2 my-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 hover:border-gray-500 sm:text-sm'
            type='email'
            placeholder='correo@c.com'
            required
          />
          <input
            className='appearance-none rounded-none relative block w-full px-3 py-2 my-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 hover:border-gray-500 sm:text-sm'
            type='password'
            required
          />
        </div>
        <div className='flex justify-between'>
          <div>
            <label htmlFor='recuerdame'>
              <input type='checkbox' name='recuerdame'className='' />
                Recuerdame
            </label>
          </div>
          <div>
            {/* <Link to='/'>¿Olvidaste tu contraseña?</Link> */}
          </div>
        </div>
        <div>
            <button type='submit' className='rounded-full py-3 px-6 bg-indigo-500 p-2 my-4 text-white shadow-md hover:bg-indigo-700'>
                Iniciar Sesion
            </button>
          {/* <Link to='/Usuarios'>
            
          </Link> */}
        </div>
        <div className='my-2'>O</div>
        <div>
            <button className='bg-indigo-200 p-2 my-4 text-black rounded-lg shadow-md hover:bg-indigo-300'>
              Continua con google
            </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
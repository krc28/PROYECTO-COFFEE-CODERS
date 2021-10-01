import 'bootstrap/dist/css/bootstrap.css';
import 'styles/StyleUsuario.css';
import OpcionRadioEstado from 'components/OpcionRadioEstado';
import OpcionRadioRol from 'components/OpcionRadioRol';
import IconoUsuarios from 'media/IconoAdminUsuarios.jpg';

function IndexUsuario(){
    return (
        <body>
            <div className="mainCointeiner">
                <div className='circular--landscape position-absolute top-0 start-0'>
                     <img src={IconoUsuarios} alt='imagen' className='IconoUsuarios' />
                </div>
                <h1>Gestión de Usuarios</h1>
                <table className="table table-dark table-striped container-xl">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Documento ID</th>
                    <th scope="col">Nombre Completo</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Teléfono</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Rol</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>1134763965</td>
                    <td>Isabel Duque Abad</td>
                    <td>isada12@gmail.com</td>
                    <td>3015784532</td>
                    <td><OpcionRadioEstado/> </td>
                    <td><OpcionRadioRol/>  </td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>433795135</td>
                    <td>Gustavo Rojas Niño</td>
                    <td>gus48@gmail.com</td>
                    <td>3127895645</td>
                    <td><OpcionRadioEstado/> </td>
                    <td><OpcionRadioRol/>  </td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>1159342768</td>
                    <td>Andrea Monsalve Tirado</td>
                    <td>monsalvetirado@gmail.com</td>
                    <td>3046579123</td>
                    <td><OpcionRadioEstado/> </td>
                    <td><OpcionRadioRol/>  </td>
                    </tr>
                    <tr>
                    <th scope="row">4</th>
                    <td>43891123</td>
                    <td>Jairo Pineda Cardona</td>
                    <td>jairopica02@gmail.com</td>
                    <td>3105638792</td>
                    <td><OpcionRadioEstado/> </td>
                    <td><OpcionRadioRol/>  </td>
                    </tr>
                </tbody>
                </table>
                <button type="button" className="btn btn-light position-flex">Guardar Cambios</button>
            </div>  
        </body>
       
    )
}

export default IndexUsuario;




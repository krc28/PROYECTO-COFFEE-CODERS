import 'styles/estiloPaginaAdmonVentas.css';
import imagen from 'media/imagenVentas.svg';
import vector from 'media/vectorVentas.svg';


function IndexVentas(){
    return(
        <body>
            <form action="paginaAdmonVentas.html" class="formulario">  
            <main class="contenedor">
                <div class="contenedor-textos">
                    <h1 class= "titulo">¡Este es tu módulo de Administrador de Ventas!</h1>
                    <h2 class= "subtitulo">Ingrese o registre los pedidos realizados por cada uno de los clientes</h2>
                </div>
                <div class="contenedor-formulario">
                    <h1 class="ID">Identificador único de venta</h1>
                    <input type="number" class="sub" placeholder="Ingrese el identificador (id) único de la venta"/>            
                    <h1 class="valortotal">Valor total</h1>
                    <input type="number" min="1" step="any" class="sub1" placeholder="Ingrese el valor total de la venta"/>            
                    <h1 class="descripcion">Descripción de la venta</h1>
                    <textarea name="Descripción" rows="10" cols="30" class="sub2" maxlength="300" placeholder="Ingrese la descripción detallada de la venta (máximo 300 palabras)"></textarea>        
                    <h1 class="fechainicial">Fecha inicial de pago</h1>
                    <input type="date" class="sub3" placeholder="Ingrese la fecha inicial de pago"/>            
                    <h1 class="fechafutura">Fecha futura de pago</h1>
                    <input type="date" class="sub4" placeholder="Escribe la fecha futura de pago"/> 
                    <h1 class="encargado">Vendedor encargado de la venta</h1>
                    <input type="text" class="sub5" placeholder="Escriba el nombre del vendedor que hizo la venta"/> 
                    <button type="submit" class="botonnuevaventa">Ingresar nueva venta</button>
                </div>
                <div class="contenedor-imagen">
                    <img src={imagen} alt="" class="img"/>
                </div>
                <img src={vector} alt="" class="vector"/>
            </main>
            </form>
        </body>
    )
}

export default IndexVentas;
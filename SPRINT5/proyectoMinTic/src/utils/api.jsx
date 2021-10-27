import axios from 'axios';


const getToken =()=>{
    return `Bearer ${localStorage.getItem('token')}`;
}

const obtenerUsuarioRegistrado = async ()=>{
const options = {
    method: 'GET',
    url: 'http://localhost:5000/usuarios/self',
    headers: {'Content-Type': 'application/json', Authorization: getToken()}
}
await axios.request(options).catch(function (error) {console.error(error)});
}

export default obtenerUsuarioRegistrado;

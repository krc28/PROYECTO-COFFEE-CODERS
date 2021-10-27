import { ObjectId } from 'mongodb';
import { getDB } from '../db/dbMongo.js';
import pkg from 'jwt-decode';
const {jwt_decode} = pkg;


const queryUsuarios = async (callback) => {
    const baseDeDatos = getDB();
    await baseDeDatos.collection('usuarios').find({}).toArray(callback);
  };

const consultarocrearUsuarioRegistrado = async(req, callback)=>{
  const token = req.headers.authorization.split('Bearer ')[1];
  const user =  pkg(token)['http://localhost/userData'];
  console.log(user);
  const baseDeDatos = getDB();
  await baseDeDatos.collection('usuarios').findOne({email: user.email}, async (err, response)=>{
    console.log('response consulta bd', response);
    if(response){
      callback(err, response);
    }else{
      user.auth0ID = user._id;
      delete user._id;
      user.estado = "Pendiente";
      user.rol = "";
      user.documento = "";
      user.telefono = "";
      await ingresarUsuario(user,(err, respuesta)=> callback(err, user));
    }
  });
};  

const ingresarUsuario = async (datosUsuarios, callback) => {
    const baseDeDatos = getDB();
    await baseDeDatos.collection('usuarios').insertOne(datosUsuarios, callback);
  };

  const editarUsuarios = async (id, edicion, callback) => {
    const filtroUsuarios = { _id: new ObjectId(id) };
    const operacion = {
      $set: edicion,
    };
    const baseDeDatos = getDB();
    await baseDeDatos
      .collection('usuarios')
      .findOneAndUpdate(filtroUsuarios, operacion, { upsert: true, returnOriginal: true }, callback);
  };


export { queryUsuarios, ingresarUsuario, editarUsuarios, consultarocrearUsuarioRegistrado};
import { ObjectId } from 'mongodb';
import { getDB } from '../db/dbUsuarios.js';

const queryUsuarios = async (callback) => {
    const baseDeDatos = getDB();
    console.log('query');
    await baseDeDatos.collection('usuarios').find({}).toArray(callback);
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


export { queryUsuarios, ingresarUsuario, editarUsuarios};
import { ObjectId } from 'mongodb';
<<<<<<< HEAD
import { getDB } from '../db/dbUsuarios.js';

const queryProducto = async (callback) => {
    const baseDeDatos = getDB();
    console.log('query');
=======
import { getDB } from '../db/dbMongo.js';

const queryProducto = async (callback) => {
    const baseDeDatos = getDB();
>>>>>>> 81ffef2cd8a706995aeb342f3fe90d135841ff5a
    await baseDeDatos.collection('productos').find({}).toArray(callback);
  };

const crearProducto = async (datosProductos, callback) => {
    const baseDeDatos = getDB();
    await baseDeDatos.collection('productos').insertOne(datosProductos, callback);
  };

const editarProducto = async (id, edicion, callback) => {
    const filtroProducto = { _id: new ObjectId(id) };
    const operacion = {
      $set: edicion,
    };
    const baseDeDatos = getDB();
    await baseDeDatos
      .collection('productos')
      .findOneAndUpdate(filtroProducto, operacion, { upsert: true, returnOriginal: true }, callback);
  };

<<<<<<< HEAD
const consultarProducto = async (id, callback) => {
    const baseDeDatos = getDB();
    await baseDeDatos.collection('productos').findOne({ _id: new ObjectId(id) }, callback);
  };

export { queryProducto, crearProducto, editarProducto, consultarProducto };
=======

export { queryProducto, crearProducto, editarProducto };
>>>>>>> 81ffef2cd8a706995aeb342f3fe90d135841ff5a

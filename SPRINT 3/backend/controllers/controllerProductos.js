import { ObjectId } from 'mongodb';
import { getDB } from '../db/dbMongo.js';

const queryProducto = async (callback) => {
    const baseDeDatos = getDB();
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


export { queryProducto, crearProducto, editarProducto };
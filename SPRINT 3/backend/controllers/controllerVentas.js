import { ObjectId } from 'mongodb';
<<<<<<< HEAD
import { getDB } from '../db/dbUsuarios.js';

const queryVenta = async (callback) => {
    const baseDeDatos = getDB();
    console.log('query');
=======
import { getDB } from '../db/dbMongo.js';

const queryVenta = async (callback) => {
    const baseDeDatos = getDB();
>>>>>>> 81ffef2cd8a706995aeb342f3fe90d135841ff5a
    await baseDeDatos.collection('ventas').find({}).toArray(callback);
  };

const crearVenta = async (datosVenta, callback) => {
    const baseDeDatos = getDB();
    await baseDeDatos.collection('ventas').insertOne(datosVenta, callback);
  };

const editarVenta = async (id, edicion, callback) => {
    const filtroVenta = { _id: new ObjectId(id) };
    const operacion = {
      $set: edicion,
    };
    const baseDeDatos = getDB();
    await baseDeDatos
      .collection('ventas')
      .findOneAndUpdate(filtroVenta, operacion, { upsert: true, returnOriginal: true }, callback);
  };

<<<<<<< HEAD
const consultarVenta = async (id, callback) => {
    const baseDeDatos = getDB();
    await baseDeDatos.collection('ventas').findOne({ _id: new ObjectId(id) }, callback);
  };

export { queryVenta, crearVenta, editarVenta, consultarVenta };
=======

export { queryVenta, crearVenta, editarVenta };
>>>>>>> 81ffef2cd8a706995aeb342f3fe90d135841ff5a

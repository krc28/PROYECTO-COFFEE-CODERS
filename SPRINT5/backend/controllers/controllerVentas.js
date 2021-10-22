import { ObjectId } from 'mongodb';
import { getDB } from '../db/dbMongo.js';

const queryVenta = async (callback) => {
    const baseDeDatos = getDB();
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


export { queryVenta, crearVenta, editarVenta };
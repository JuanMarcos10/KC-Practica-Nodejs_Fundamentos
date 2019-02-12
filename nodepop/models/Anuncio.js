'use strict';

const mongoose = require('mongoose');

// definimos el esquema
var anuncioSchema = mongoose.Schema({
    nombre: { type: String, index: true },
  //  venta: { type: Boolean, index: true },
    precio: { type: Number, index: true }
  //,  foto: { type: String, index: true },
  //  tags: { type: [String], index: true }
  }, { collection: 'anuncios' });

  // creamos un método estático
anuncioSchema.statics.listar = (filtro, skip, limit, fields, sort) => {
    const query = Anuncio.find(filtro);
    query.skip(skip);
    query.limit(limit);
    query.select(fields);
    query.sort(sort);
    return query.exec();
  };
  
  // en los métodos de instancia no usar arrow functions para permitir a mongoose inyectar el this
  
  // creamos el modelo
  const Anuncio = mongoose.model('Anuncio', anuncioSchema);
  
  module.exports = Anuncio;
'use strict';

const express = require('express');
const router = express.Router();
const Anuncio = require('../../models/Anuncio');

/**
 * GET /anuncios
 * Obtener una lista de anuncios
 * 
 */
router.get('/', async (req, res, next) => {
  try { // protejemos el código para recoger posibles excepciones
    
    // Recogemos valores de entrada
    const nombre = req.query.nombre;
    const precio = req.query.precio;
    const skip = parseInt(req.query.skip);
    const limit = parseInt(req.query.limit);
    const fields = req.query.fields;
    const sort = req.query.sort;

    const filter = {};

    if (nombre) {
      filter.nombre = nombre;
    }

    if (precio) {
      filter.precio = precio;
    }

    // buscamos anuncios en la base de datos
    const anuncios = await Anuncio.listar(filter, skip, limit, fields, sort);

    res.json({ success: true, results: anuncios });

  } catch(err) {
    next(err);
    return;
  }
});

/**
 * GET /anuncios/:id
 * Obtener un anuncio
 */
router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;

    const anuncio = await Anuncio.findById(id).exec();
    
    res.json({ success: true, result: anuncio });

  } catch (err) {
    next(err);
    return;
  }
});

/**
 * POST /anuncios
 * Crear un anuncio
 
router.post('/', async (req, res, next) => {
  try {
    const data = req.body;

    const agente = new Agente(data);

    const agenteGuardado = await agente.save();    

    res.json({ success: true, result: agenteGuardado });

  } catch(err) {
    next(err);
    return;
  }
});
*/

/**
 * PUT /agentes/:id
 * Actualiza un agente

router.put('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;

    const agenteActualizado = await Agente.findOneAndUpdate({ _id: id}, data, { new: true }).exec();
    // { new: true } solicita que retorne el documento actualizado

    res.json({ success: true, result: agenteActualizado });

  } catch (err) {
    next(err);
    return;
  }
});
 */

/**
 * DELETE /agentes/:id
 * Elimina un agente

router.delete('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;

    await Agente.deleteOne({ _id: id }).exec();

    res.json({ success: true });

  } catch (err) {
    next(err);
    return;
  }
});
 */
module.exports = router;

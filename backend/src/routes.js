const { Router } = require('express');

const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

/** Métodos HTTP: 
 *  Get, Post, Put, Delete
*/

// Tipos de parâmetros:

// Query Params: request.query (Filtros, Ordenação, Paginação,...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: requst.body (Dados para a criação ou alteração de um registro)

// MongoDB (Banco não-relacional)

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes;
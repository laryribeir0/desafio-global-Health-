const router = require('express').Router();

const PatientController = require('../api/controller/PatientController');

const controller = new PatientController();

router
  .post('/cadastrar', controller.create)
  .get('/buscar', controller.read)
  .get('/buscar/:id', controller.readId)
  .put('/atualizar/:id', controller.update)
  .delete('/apagar/:id', controller.delete);

module.exports = router;
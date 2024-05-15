const express = require('express');
const router = express.Router();
const caseeController = require('../controllers/caseeController.js');
const evidenceController = require('../controllers/evidenceController.js');
const userController = require('../controllers/userController.js');

router
  .post('/user', userController.createUser)
  .get('/user', userController.getUsers)
  .get('/user/:userId', userController.getUserById)
  .put('/user/:userId', userController.updateUser)
  .delete('/user/:userId', userController.deleteUser)

  
router
.post('/case', caseeController.createCasee)
.get('/case/:caseeId', caseeController.getCaseeById)
.put('/case/:caseeId', caseeController.updateCasee)
.delete('/case/:caseeId', caseeController.deleteCasee)

router
  .post('/evidence', evidenceController.createEvidence)
  .put('/evidence/:evidenceId', evidenceController.updateEvidence)
  .delete('/evidence/:evidenceId', evidenceController.deleteEvidence)

router
  .post('/evidences', evidenceController.getEvidences)

module.exports = router;
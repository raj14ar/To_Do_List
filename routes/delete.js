//require express
const express = require('express');
//create the object of router
const router = express.Router();

const deleteController = require('../controllers/delete_controller');

//handle the request for /delete-task and navigate to delete_controller
router.get('/', deleteController.delete);

module.exports = router;
//require express
const express = require('express');
//create the object of router
const router = express.Router();

const updateController = require('../controllers/update_controller');

//handle the request for /completed and nevigate to update_controller
router.get('/', updateController.update);

module.exports = router;
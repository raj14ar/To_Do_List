// require express
const express = require('express');
// require router
const router = express.Router();

const homeController = require('../controllers/home_controller');

//handle the request for / and navigate to home_controller
router.get('/', homeController.home);

//handle /add-task url
router.use('/add-task', require('./create'));

//handle /delete-task url
router.use('/delete-task', require('./delete'));

//handle /completed url
router.use('/completed', require('./update'));

module.exports = router;
var express = require('express');
const usersController = require('../controllers/usersController');
var router = express.Router();
const userCotroller = require("../controllers/usersController");


router.post('/login', usersController.signIn);

router.post('/signup',userCotroller.signUp);



module.exports = router;

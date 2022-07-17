var express = require('express');
var router = express.Router();

/* GET & POST users listing login.
router.get('/login', function(req, res, next) {
  console.log(req.query)
  const login = 
    {
      id: 0,
      email: "test@test.com",
      passsword: "test123",
    }
  res.status(200).json(login)
}); */

router.post('/login', function(req, res, next) {
  console.log(req.body)
  res.status(200).json(req.body)
});

/* GET & POST users listing signup. 
router.get('/signup', function(req,res,next){
  console.log(req.body)
  const signup = [
    {
      id: 1,
      name: "nombre",
      last_name: "apellido",
      email: "test1@test.com",
      passsword: "test123",
    }
  ]
  res.status(200).json(signup)
});*/

router.post('/signup', function(req, res, next) {
  console.log(req.body)
  res.status(201).json(req.body)

});



module.exports = router;

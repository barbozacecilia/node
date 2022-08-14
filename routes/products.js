var express = require('express');
var router = express.Router(); 

const productController =require('../controllers/productsController');

/* GET products listing. */
router.get('/', productController.getAll);
router.get('/:id', productController.getById);
router.post('/',(req, res, next)=>{req.app.verifyToken(req, res, next)}, productController.create);
router.put('/:id', productController.update);
router.delete('/:id', productController.delete);


module.exports = router;
/* POST products listing. 
router.post('/', function(req, res, next) {
  console.log(req.body)
  res.status(201).json(req.body)
});*/

/**
router.get('/:id', function(req, res, next){
  console.log(req.params.id)
  const product = 
  {
    id: 5,
    name: "product 5",
    price: 5,
  }
  res.status(200).json(product)
}); */

/* PUT products listing. 
router.put('/:id',function(req, res, next){
  console.log(req.body)
  res.status(201).json(req.body)
});*/

/* DELETE products listing. 
router.delete('/:id', function(req, res, next){
 console.log(req.params.id)
 const product = 
 {
   id: 5,
   name: "product 5",
   price: 5,
 }
 res.status(201).json({product})
});
*/


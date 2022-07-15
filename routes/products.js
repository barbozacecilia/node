var express = require('express');
var router = express.Router();

/* GET products listing. */
router.get('/categories', function(req, res, next) {
  res.send('respond with a resource products categories');
});

router.get('/', function(req, res, next) {
  console.log(req.query)
  const products = [
    {
      id: 1,
      name: "product 1",
      price: 1,
    },
    {
      id: 2,
      name: "product 2",
      price: 1,
    },
    {
      id: 3,
      name: "product 3",
      price: 3,
    },
  ]
  res.status(200).json(products)
});

router.get('/:id', function(req, res, next){
  console.log(req.params.id)
  const product = 
  {
    id: 5,
    name: "product 5",
    price: 5,
  }
  res.status(200).json(product)
});


/* POST products listing. */
router.post('/', function(req, res, next) {
  console.log(req.body)
  res.status(201).json(req.body)
});

/* PUT products listing. */
router.put('/:id',function(req, res, next){
  console.log(req.body)
  res.status(201).json(req.body)
});

/* DELETE products listing. */
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

module.exports = router;

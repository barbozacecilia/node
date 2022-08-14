const categoriesModel = require('../models/categoriesModel')
module.exports={

    create:async function(req, res, next) {
        try{
          console.log(req.body)
          console.log(req.body.name)

          const document = new categoriesModel({
            name:req.body.name
          })
          const response = await document.save()

          res.json(response)
        }catch(e){
          //e.status=200
          next(e)
        }
        
    },
    getAll:async function(req, res, next) {
        try{
          const document = await categoriesModel.find()
          res.json(document)
        }catch(e){
          next(e)
        }
      },
    
}
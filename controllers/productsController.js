const productsModel = require("../models/productsModel")

module.exports = {
    getAll: async function (req, res, next) {
        try {
            const products = await productsModel.find()
            res.status(200).json(products)
        } catch (e) {
            console.log(e)
        }
    },
    
    getById: async function(req, res, next) {
        console.log(req.params.id)
        try {
            const product = await productsModel.findById(req.params.id)
            res.status(200).json(product)
        } catch (e) {
            console.log(e)
        }
    },

    create: async function (req, res, next) {
        try {
            const product = new productsModel({
                name: req.body.name,
                price: req.body.price,
                description: req.body.description,
                category: req.body.category,
                code: req.body.code,
            })
            const document = await product.save()
            console.log(req.body)
            res.status(201).json(document)
        } catch (e) {
            console.log(e)
            res.json(e.message)
        }
    },


    delete: async function (req, res, next) {
        console.log(req.params.id)
        try {
            const product = await productsModel.deleteOne({ _id: req.params.id })
            res.status(200).json(product)
        } catch (e) {
            console.log(e)
        }
    },
    update: async function(req, res, next) {
        console.log(req.body)
        try {
            const product = await productsModel.updateOne({_id: req.params.id }, req.body)
            res.status(200).json(product)
        } catch (e) {
            console.log(e)
        }
    },


}
const usersModel = require("../models/usersModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
    
    signUp: async function (req, res, next) {
        try {
            const user = new usersModel({
                name: req.body.name,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
            })
            const document = await user.save()
            res.status(201).json(document)
        } catch (e) {
            console.log(e)
            res.json(e.message)
            next(e)
        }
    },

    signIn: async function (req, res, next) {
        try {
            const user = await usersModel.findOne({email: req.body.email})
            if(!user){
                res.json({message: "Revise sus datos"})
                return
            }
            console.log(user, req.body.password);
            if(bcrypt.compareSync(req.body.password, user.password)){
                const token = jwt.sign({userId: user._id}, req.app.get("secretKey"),{expiresIn: "2h"})
                res.status(201).json({token})
            }else{
                res.json({message: "Revise los datos ingresados"})
                return
            }
            res.status(201).json(document)
        } catch (e) {
            console.log(e)
            next(e)
        }
    },


}
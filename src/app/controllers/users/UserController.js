
const services = require('../../services/users')
const responseErrorMessage = require('../../utils/responseErrorMessage')
const errorMessage = require('../../utils/responseErrorMessage')

function responseError(res) {
    return res.status(500).json({"res": errorMessage.res})
}

function isValidRequest(body) {

    let isValid = false
    if( body.hasOwnProperty('name') && body.hasOwnProperty('email') && body.hasOwnProperty('password') ) {
        isValid = true
    }
    return isValid
}

class UserController{
    async store(req, res, next){
        try {
            if(isValidRequest(req.body)){
                const emailIsExist = await services.findOneByEmail(req.body.email)
                if(!emailIsExist) {     
                    await services.create(req.body)
                    return res.status(201).json({"res":"Usuario criado com sucesso"})
                } else {
                    return res.status(400).json({"res":"Email já utilizado"})
                }
            }
                
            return res.status(400).json({"res":"todos os campos são obrigatorios"})
        } catch (error) {
            responseError(res)
        }
        
    }

    async index(req, res, next){
        try {
            const users = await services.list()
            return res.json(users)
        } catch (error) {
            return res.status(500).json({"res": responseErrorMessage.res})
        }
    }

    async delete(req, res, next){
        try {
            const  idUser  = req.params.id;
           
            const deleted = await services.delete(idUser)
            if (deleted) {
                 return res.status(200).json({"res":"Usuario excluido com sucesso"})
            }   
        } catch (error) {
            responseError(res)
        }
        
    }

    async update(req, res, next){
        try {
            
            const idUser = req.params.id;
            if(isValidRequest(req.body)){
                const [ updated ] = await services.update(idUser, req.body)
                if(updated){
                    return res.status(200).json({"res":"Usuario atualizado com sucesso"})  
                } 
            } else {
                return req.status(400).send({"res":"Todos os campos são obrigatorios"})
            }
        } catch (error) {
            responseError(res)
        }
    }

    async findOne(req, res, next){
        try {
            const idUser = req.params.id;
            const user = await services.findOne(idUser)
            res.status(200).json({"res":user})  
        } catch (error) {
            responseError(res)
        }
    }
}

module.exports = new UserController()
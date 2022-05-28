const services = require('../../services/services')
const responseErrorMessage = require('../../utils/responseErrorMessage')
const errorMessage = require('../../utils/responseErrorMessage')

function responseError(res) {
    return res.status(500).json({"res": errorMessage.res})
}

function isValidRequest(body) {

    let isValid = false
    if( body.hasOwnProperty('name') && body.name !== '' ) {
        isValid = true
    }
    return isValid
}

class ServiceController{
    async store(req, res, next){
        try {
            if(isValidRequest(req.body)){
                await services.create(req.body)
                return res.status(201).json({"res":"Serviço criado com sucesso"})
            }
                
            return res.status(400).json({"res":"todos os campos são obrigatorios"})
        } catch (error) {
            console.error('error ===>', error)
            responseError(res)
        }
        
    }

    async index(req, res, next){
        try {
            const serviceList = await services.list()
            return res.json(serviceList)
        } catch (error) {
            return res.status(500).json({"res": responseErrorMessage.res})
        }
    }

    async delete(req, res, next){
        try {
            const  idService  = req.params.id;
           
            const deleted = await services.delete(idService)
            if (deleted) {
                 return res.status(200).json({"res":"serviço excluido com sucesso"})
            }   
        } catch (error) {
            responseError(res)
        }
        
    }

    async update(req, res, next){
        try {
            
            const idService = req.params.id;
            if(isValidRequest(req.body)){
                const updated = await services.update(idService, req.body)
                if(updated){
                    return res.status(200).json({"res":"Serviço atualizado com sucesso"})  
                } 
            } else {
                return req.status(400).send({"res":"Todos os campos são obrigatorios"})
            }
        } catch (error) {
            console.log('error => ', error)
            responseError(res)
        }
    }

    async findOne(req, res, next){
        try {
            const idService = req.params.id;
            const serve = await services.findOne(idService)
            res.status(200).json({"res":serve})  
        } catch (error) {
            console.log('error ====>' , error )
            responseError(res)
        }
    }
}

module.exports = new ServiceController()
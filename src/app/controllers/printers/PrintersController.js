const services = require('../../services/printers')
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

class PrintersController{
    async store(req, res, next){
        try {
            if(isValidRequest(req.body)){
                await services.create(req.body)
                return res.status(201).json({"res":"Impressora criado com sucesso"})
            }
                
            return res.status(400).json({"res":"todos os campos são obrigatorios"})
        } catch (error) {
            responseError(res)
        }
        
    }

    async index(req, res, next){
        try {
            const printerList = await services.list()
            return res.json({"res": printerList})
        } catch (error) {
            return res.status(500).json({"res": responseErrorMessage.res})
        }
    }

    async delete(req, res, next){
        try {
            const  idPrinter  = req.params.id;
           
            const deleted = await services.delete(idPrinter)
            if (deleted) {
                 return res.status(200).json({"res":"impressora excluido com sucesso"})
            }   
        } catch (error) {
            responseError(res)
        }
        
    }

    async update(req, res, next){
        try {
            
            const idPrinter = req.params.id;
            if(isValidRequest(req.body)){
                const updated = await services.update(idPrinter, req.body)
                if(updated){
                    return res.status(200).json({"res":"impressora atualizado com sucesso"})  
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
            const idPrinter = req.params.id;
            const printer = await services.findOne(idPrinter)
            res.status(200).json({"res":printer})  
        } catch (error) {
            console.log('error ====>' , error )
            responseError(res)
        }
    }
}

module.exports = new PrintersController()

const yup = require('yup')

const schema = yup.object().shape({
    service_id: yup.number().required(),
    printer_id: yup.number().required(),
    amount: yup.number().required(),
    price: yup.number().required(),
    delivery_date: yup.string().required(),
    status: yup.string().required(),
    delivery_forecast: yup.string().required()
})

class OrderServicesController{
    
   async store(req, res, next) {
    schema.isValid(req.body)
    .then((valid) => {
        if(valid){
            return res.json({return: 'ok'})
        } else {
            return res.json({"res":"todos os campos são obrigatorios"})
        }
    })
   }

}

module.exports = new OrderServicesController()
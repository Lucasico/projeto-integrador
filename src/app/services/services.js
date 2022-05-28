
const Service = require('../models/Service')

module.exports = {
    async create(data){
        Service.create(data)
    },

    async delete(id) {
        const deleted = await Service.destroy({
            where: { id: id }
        })

        return deleted
    },

    async findOne(id) {
        const service = await Service.findOne({
            where: {id: id}
        })

        return service
    },

    async update(id, data) {
        const [ updated ] = await Service.update(data, {
            where: { id: id }
        });
        
        return updated
    },

    async list() {
        const services = await Service.findAll()

        return services
    }
}
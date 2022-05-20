const Client = require('../models/Clients')

module.exports = {
    async create(data){
        Client.create(data)
    },

    async delete(id) {
        const deleted = await Client.destroy({
            where: { id: id }
        })

        return deleted
    },

    async findOne(id) {
        const client = await Client.findOne({
            where: {id: id}
        })

        return client
    },

    async findOneByEmail(email) {
        const client = await Client.findOne({
            where: {email: email}
        })

        return client
    },

    async update(id, data) {
        const [ updated ] = await Client.update(data, {
            where: { id: id }
        });

        return updated
    },

    async list() {
        const clients = await Client.findAll()

        return clients
    }
}
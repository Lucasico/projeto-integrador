const User = require('../models/User')

module.exports = {
    async create(data){
        User.create(data)
    },

    async delete(id) {
        const deleted = await User.destroy({
            where: { id: id }
        })

        return deleted
    },

    async findOne(id) {
        const user = await User.findOne({
            where: {id: id}
        })

        return user
    },

    async findOneByEmail(email) {
        const user = await User.findOne({
            where: {email: email}
        })

        return user
    },

    async update(id, data) {
        const [ updated ] = await User.update(data, {
            where: { id: id }
        });

        return updated
    },

    async list() {
        const users = await User.findAll()

        return users
    }
}
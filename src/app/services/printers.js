
const Printers = require('../models/Printers')

module.exports = {
    async create(data){
        Printers.create(data)
    },

    async delete(id) {
        const deleted = await Printers.destroy({
            where: { id: id }
        })

        return deleted
    },

    async findOne(id) {
        const printList = await Printers.findOne({
            where: {id: id}
        })

        return printList
    },

    async update(id, data) {
        const [ updated ] = await Printers.update(data, {
            where: { id: id }
        });
        
        return updated
    },

    async list() {
        const listPrinters = await Printers.findAll()

        return listPrinters
    }
}
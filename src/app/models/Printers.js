const Sequelize = require('sequelize')

class Printer extends Sequelize.Model{
    static init(sequelize){
        super.init(
            {
                name:Sequelize.STRING,
            },
            {
                sequelize
            }
        );

        return this
    }
}

module.exports = Printer
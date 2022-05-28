const Sequelize = require('sequelize')

class Service extends Sequelize.Model{
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

module.exports = Service
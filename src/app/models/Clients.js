const Sequelize = require('sequelize')

class Client extends Sequelize.Model{
    static init(sequelize){
        super.init(
            {
                name:Sequelize.STRING,
                email:Sequelize.STRING,
                phone:Sequelize.STRING,
                street:Sequelize.STRING,
                district:Sequelize.STRING,
                number:Sequelize.STRING,
                city:Sequelize.STRING,
                uf:Sequelize.STRING,
            },
            {
                sequelize
            }
        );

        return this
    }
}

module.exports = Client
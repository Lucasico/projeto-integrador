const Sequelize = require('sequelize')

class User extends Sequelize.Model{
    static init(sequelize){
        super.init(
            {
                admin:Sequelize.BOOLEAN,
                name:Sequelize.STRING,
                email:Sequelize.STRING,
                password:Sequelize.STRING

            },
            {
                sequelize
            }
        );

        return this
    }
}

module.exports = User
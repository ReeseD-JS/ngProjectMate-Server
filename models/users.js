const Model = require('sequelize').Model;

module.exports = (sequelize, DataTypes) => {
    class Users extends Model {}

    Users.init({
        username: {
            type: DataTypes.STRING,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            },
            unique: true
        },
        password: {
            type: DataTypes.STRING
        }
    }, {
        sequelize: sequelize,
        modelName: 'users'
    })

    return Users;
};
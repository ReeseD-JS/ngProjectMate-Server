const Model = require('sequelize').Model;

module.exports = (sequelize, DataTypes) => {
    class Tasks extends Model {}

    Tasks.init({
        taskTitle: {
            type: DataTypes.STRING
        },
        taskDescription: {
            type: DataTypes.STRING
        }
    }, {
        sequelize: sequelize,
        modelName: 'tasks'
    })

    return Tasks;
};
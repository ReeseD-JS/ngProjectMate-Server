const Model = require('sequelize').Model;

module.exports = (sequelize, DataTypes) => {
    class Projects extends Model {}

    Projects.init({
        projectTitle: {
            type: DataTypes.STRING
        },
        projectDescription: {
            type: DataTypes.STRING
        }
    }, {
        sequelize: sequelize,
        modelName: 'projects'
    })

    return Projects;
};
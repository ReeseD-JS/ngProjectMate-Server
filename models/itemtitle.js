const Model = require('sequelize').Model;

module.exports = (sequelize, DataTypes) => {
    class ItemTitle extends Model {}

    ItemTitle.init({
        itemTitle: {
            type: DataTypes.STRING
        }
    }, {
        sequelize: sequelize,
        modelName: 'itemTitles'
    })

    return ItemTitle;
};
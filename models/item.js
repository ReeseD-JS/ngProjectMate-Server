const Model = require('sequelize').Model;

module.exports = (sequelize, DataTypes) => {
    class Item extends Model {}

    Item.init({
        item: {
            type: DataTypes.STRING
        }
    }, {
        sequelize: sequelize,
        modelName: 'items'
    })

    return Item;
};
const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_URL, {
    dialect: 'postgres'
});

sequelize.authenticate().then(
    function() {
        console.log('Connected To Project Mate DB');
    },
    function(err) {
        console.log(err);
    }
);

let Users = sequelize.import('./models/users.js');
let Projects = sequelize.import('./models/projects.js');
let Tasks = sequelize.import('./models/tasks.js');
let ItemTitle = sequelize.import('./models/itemtitle.js');
let Item = sequelize.import('./models/item.js');


module.exports = sequelize;
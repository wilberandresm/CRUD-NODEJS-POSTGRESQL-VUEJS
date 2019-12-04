const Sequelize = require('sequelize');

const sequelize = require('./index');

const estudiante=sequelize.define("estudiante",{

    FirstName:{
        type:Sequelize.STRING
    },
    LastName:{
        type:Sequelize.STRING
    }

});

estudiante.sync({ force:false});

module.exports={estudiante};

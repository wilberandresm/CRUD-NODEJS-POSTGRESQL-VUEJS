const Sequelize = require('sequelize');

const sequelize = new Sequelize('estudiantes','postgres','98991902',
    {
        host:'localhost',
        dialect: 'postgres',
        pool:{
            max:5,
            min:0,
            idle:10000
        }
    }
)

sequelize
  .authenticate()
  .then((err) => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.log('Unable to connect to the database:', err);
  });

module.exports = sequelize;
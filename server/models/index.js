// all models are exported from here
const {Sequelize, DataTypes} = require('sequelize');
const dbConfig = require('../config/config').development;

const sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password, {
        host: dbConfig.host,
        dialect: dbConfig.dialect,
    }
)

sequelize.authenticate()
.then(() => {
    console.log('Connected to database')
})
.catch(err => {
    console.log('Error'+ err)
})

const models = {}

models.Sequelize = Sequelize
models.sequelize = sequelize

models.User = require('./user')(sequelize, DataTypes)
models.Bookmark = require('./bookmark')(sequelize, DataTypes)
models.Review = require('./review')(sequelize, DataTypes)

module.exports = models
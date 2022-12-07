'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Bookmark, {
        foreignKey: 'userId',
        as: 'bookmarks'
      });
      User.hasMany(models.Review, {
        foreignKey: 'userId',
        as: 'reviews'
      });
    }
  }
  User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    profilePic: DataTypes.STRING,
    birthday: DataTypes.DATE,
    confirmed: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'User',
    timestamps: false
  });
  return User;
};
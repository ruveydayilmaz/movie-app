'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Review.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
      });
    }
  }
  Review.init({
    userId: DataTypes.UUID,
    movieId: DataTypes.INTEGER,
    liked: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Review',
    timestamps: false
  });
  return Review;
};
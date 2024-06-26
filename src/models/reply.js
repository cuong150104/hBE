"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Reply extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    
    }
  }
  Reply.init(
    {
        userId: DataTypes.INTEGER,
        reviewId: DataTypes.INTEGER,
        content: DataTypes.STRING,
        
    },
    {
      sequelize,
      modelName: "Reply",
    }
  );
  return Reply;
};

'use strict'
var dType =  require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('comments', {
    id: {
      type: dType.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,      
    },
    text: {
      type: dType.TEXT,
      required: true
    },
    created_at: {
      type: dType.DATE,
      allowNull: false
    },
    updated_at:  dType.DATE
  }, {
    underscored: true
  });

  return Comment;
};
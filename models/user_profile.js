'use strict'
var dt=require('sequelize');
module.exports = (sequelize, DataTypes) => {
    const UserProfile = sequelize.define('user_profile', {
      id: {
        type: dt.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,      
      },
        name: {
        type: dt.STRING,
        required: true
      },
        address: {
        type: dt.STRING,
        required: true
      },
      created_at: {
        type: dt.DATE,
        allowNull: false
      },
      updated_at:  dt.DATE
  }, {
      underscored: true
  }
);

      return UserProfile;
};
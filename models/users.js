'use strict'
var dt=require('sequelize');
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
      id: {
        type: dt.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,      
      },
        username: {
        type: dt.STRING,
        required: true
      },
        passowrd: {
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
  User.addHook('afterDestroy',(User, options) => {
        return sequelize.models.post.destroy({where: {user_id: User.id}})
  });
      return User;
};
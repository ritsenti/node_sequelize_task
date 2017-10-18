var Sequelize=require('sequelize');

    const sequelize = new Sequelize('practice', 'ritesh', 'rit@12', {
        host: 'localhost',
        dialect: 'mysql',
        define: {
            underscored: true
        }
    });
   sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });



  
  const db = {};
  
  db.Sequelize = Sequelize;
  db.sequelize = sequelize;
  
  db.users = require('../models/users.js')(sequelize, Sequelize);
  db.posts = require('../models/posts.js')(sequelize, Sequelize);
  db.comments = require('../models/comments.js')(sequelize, Sequelize);
  db.userProfile = require('../models/user_profile.js')(sequelize, Sequelize);
  
  
  db.userProfile.belongsTo(db.users,{foreignKey:"user_id",onDelete: 'cascade'});
  db.comments.belongsTo(db.posts,{foreignKey:'post_id'});
  db.posts.hasMany(db.comments,{foreignKey:'post_id',onDelete: 'cascade',hooks: true});

  db.posts.belongsTo(db.users,{foreignKey:'user_id',hooks: true});
  db.users.hasMany(db.posts,{foreignKey:'user_id',onDelete: 'cascade',hooks: true});
  
  module.exports = db;

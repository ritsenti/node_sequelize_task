var express=require('express');
var app=express();
var db=require('./config/dbconfig');
var bodyParser = require('body-parser');
var users=require('./routers/users');
var posts=require('./routers/posts');
var comments=require('./routers/comments');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/user',users);
app.use('/post',posts);
app.use('/comment',comments);


db.sequelize.sync().then(() => {
    app.listen(8000, () => {
    console.log('Express listening on port:', 8000);
});
});

var express=require('express');
var router=express.Router();
var sequlize=require('sequelize');
var db=require('../config/dbconfig');

    router.get('/',function(req,res){
        db.users.findAll({
            include:[{
                model:db.posts,
                include:[{model:db.comments,as:"comments"}],
                as: "posts"
            }]
        }).then((data)=>{
            
            res.send({status:true,data:data})
            
        }).catch((err)=>{
                        
            res.send({status:false,data:[],error:err});
                                    
        });
    })

    router.post('/',function(req,res){
        db.users.create(req.body,{
            include:[{
                model:db.posts,
                include:[db.comments]
            }]
        }).then((data)=>{
            
            res.send({status:true,data:data})
            
        }).catch((err)=>{
                        
            res.send({status:false,data:[],error:err});
                                    
        });
    })

    router.delete('/:id',function(req,res){
        db.users.destroy({
            where: {
                id:req.params.id
            },
            force:true
        }).then((data)=>{
            
            res.send({status:true,data:data})
            
        }).catch((err)=>{
                        
            res.send({status:false,data:[],error:err});
                                    
        });
    })

module.exports = router;

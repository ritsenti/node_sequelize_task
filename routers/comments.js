
var express=require('express');
var router=express.Router();
var db=require('../config/dbconfig');

    router.get('/',function(req,res){
        db.comments.findAll({
            include:[{
                model:db.posts
            }
        ]
        }).then((data)=>{

            res.send({status:true,data:data})

        }).catch((err)=>{

            res.send({status:false,data:[],error:err});

        });
    })

    router.post('/',function(req,res){
        db.comments.create(req.body).then((data)=>{

            res.send({status:true,data:data})

        }).catch((err)=>{

            res.send({status:false,data:[],error:err});
            
        });
    })

    router.delete('/:id',function(req,res){
        db.comments.destroy({
            where: {
                id:req.params.id
            },
            force:true
        }).then((data)=>{

            res.send(data);

        }).catch((err)=>{

            res.send({status:false,data:[],error:err});
            
        });
    })


    module.exports=router;
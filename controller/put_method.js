// const axios = require('axios')
const fs = require('fs')
const users = require("../demodata.json")

module.exports.update_data = (req,res)=>{
        // const userdata={
        //     id: req.params.id,
        //     name: req.body.name,
        //     type : req.body.type,
        //     logo: req.body.logo,
        //     short_description: req.body.short_description

    
        for (var i=0; i < users.availableCourses.length-1; i++) {
            if (users.availableCourses[i].id == req.params.id){
                break;

            }
        }
        if(users.availableCourses[i].id ==  req.params.id){

            users.availableCourses[i].id =req.params.id
            users.availableCourses[i].name = req.body.name
            users.availableCourses[i].type = req.body.type
            users.availableCourses[i].logo = req.body.logo
            users.availableCourses[i].short_description = req.body.short_description
        
            fs.writeFile('demodata.json', JSON.stringify(users,null,4),(err)=> {
                if(err)
                    console.log("data update")
                    res.send(" updated")

            })

        }else{
            console.log("not available")

        
        
        
        }
    }
    




    

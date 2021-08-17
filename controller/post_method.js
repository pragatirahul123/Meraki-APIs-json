const axios = require('axios')
const fs = require('fs')
const users=require('../demodata.json')


module.exports.create_data = (req,res)=>{
        const userdata={
            id: req.params.id,
            name: req.body.name,
            type : req.body.type,
            logo: req.body.logo,
            short_description: req.body.short_description

        }
    
     
        for (var i=0; i < users.availableCourses.length-1; i++) {
            if (users.availableCourses[i].id == req.params.id){
                // console.log(" already available")
                break;

            }
        }
        if(users.availableCourses[i].id == req.params.id){
            console.log("available")

        }else{
            
            users["availableCourses"].push(userdata)
            fs.writeFile('demodata.json', JSON.stringify(users,null,4),(err)=> {
            console.log("data wrote")

            })

        }
    
    
    
}
        








                        
                

                





    

    












        


      

        
        
    



            
    




    



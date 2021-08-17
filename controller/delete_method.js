
const axios = require('axios')
const fs = require('fs')
const users=require('../demodata.json')

module.exports.delete_data = (req,res)=>{
    var array = users.availableCourses

    for(var i=0;i<array.length;i++){
        if(array[i].id == req.params.id){
            break;

        }
    }
    if(array[i].id == req.params.id){


        let store = (array[i])
        // console.log(store)

        let index = array.indexOf(store)

        let dlt = array.splice(index,1)
        users.availableCourses =array



        
        fs.writeFile('demodata.json', JSON.stringify(users,null,4),(err)=> {
            if(err)
                console.log("data deleted")
                res.send(" deleted")

        })

    }else{
        console.log("not available")

    
    
    
    }
}
    





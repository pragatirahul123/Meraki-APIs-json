const axios = require('axios')
const fs = require('fs')
// const express = require("express")
// const app = express()
// app.use(express.json())
// const port = 6246

module.exports.read_data = (req,res)=>{
    axios.get("http://saral.navgurukul.org/api/courses").then((resp) => {
        const str = JSON.stringify(resp.data,null,4)
        console.log(str)
        res.send(str)

    

        fs.writeFile("demodata.json", str,(err) => {
            console.log("data wrote.....")



        
    
    })

})

}

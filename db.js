const mongoose = require("mongoose");

function connetionDB(){
    mongoose.connect('mongodb+srv://kalyan:HmlaogMgITBcrhGs@ak.u2ppvny.mongodb.net/userdata?retryWrites=true&w=majority' 
    // , {useUnifiedTopology: true,useNewUrlParser: true}
    )

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log("Mongo Db connection successful")
    })

    connection.on('error',()=>{
        console.log("Mongo Db connection Error")
    })
}
connetionDB()


module.exports = mongoose
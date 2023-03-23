const express = require('express');
const app = express()
const port = process.env.port || 5000
const DBconnection = require('./db')
app.use(express.json())


app.use('/api/cars',require('./routes/carRoute'))
app.use('/api/users/',require('./routes/usersRoute'))


const path = require('path')

if(process.env.NODE_ENV==='production')
{
    app.use('/' , express.static('/client/build'))
    app.get('*' , (req,res)=>{
        res.sendFile(path.resolve(__dirname,'client/build/index.html'));
    })
}



app.get('/', (req, res) => res.send("HOME"))
app.listen(port, () => console.log('Node JS server started in ${port}'))

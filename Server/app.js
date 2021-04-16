//Imports ---
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Student = require('./models/Students')
const cors = require('cors')
const bodyparser = require('body-parser')

const PORT = 3000 || process.env.PORT


//DB Connection ---
mongoose.connect("mongodb+srv://rahil_1407:codeforces@cluster0.nqlnr.mongodb.net/Students?retryWrites=true&w=majority",{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
}).then(() => console.log("Database Connected"))
  .catch((err) => console.log(err))


//Middlewares ---
app.use(cors())
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json())


//Routes ---
app.get('/',(req,res) =>{
    res.send("Hello")
})

app.post('/students',(req,res) =>{
    console.log(req.body.name,req.body.place,req.body.room)
    res.send("Recieved")
})


//Server ---
app.listen(PORT, ()=>{
    console.log(`Server is Running on PORT No:- ${PORT}.`)
})
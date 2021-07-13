const express = require("express")
const userDB = require('./config/userDB')
const User = require("./models/User")
const app = express()
userDB
port = 5500
//the get route
app.get("/getuser", (req, res) =>{
    const users = User.find()
})
//the post route
app.post('/adduser', (req,res) => {
    const {name,lastname, age, email} = req.body
    const newcontact = new  Contact ({
        name, lastname,age,email
    })
    newcontact.save()
    .then(contact=>res.send({msg:"list of users", contact})
    .catch(err=>console.log(err)))
})
//the delete route
app.delete('/deleteuser/:_id' , (req , res)=>{
    const {_id} =  req.params 
 
    Contact.deleteOne({_id})
    .then(contact =>res.send(contact))
    .catch(err=> console.log(err))
 
 })
//the put route
app.put('/updateuser/:_id' ,(req , res)=>{
    const {_id}= req.params
    const {name , lastname,age,email} = req.body
    Contact.findOneAndUpdate({_id} , {$set:{name ,lastname,age, email}})
  .then(contact =>res.send(contact))
   .catch(err=> console.log(err))
})
app.listen(port, (err)=>err ?console.log("server is not running"):console.log(`server is running on port ${port}`))

const mongoose = require('mongoose')
const config = require('config')
const userDB = () =>{
    mongoose.connect(config.get('MONGO_URI', { useNewUrlParser: true },  { useUnifiedTopology: true})
    .then(() =>console.log('the database is connected'))
    .catch("error is connect to database"))

}
module.exports = userDB
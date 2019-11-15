const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const jwt = require('jwt-simple')

const SALT_ROUNDS = 10;
const app = express()
const secret_key = 'secret'
app.set('port', process.env.PORT || 3000)

//// MIDDLEWARE DEFS
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
////

//// DATABASE CODES
const dbUrl = 'mongodb+srv://tedhagos:mongopassword@cluster0-jjekq.mongodb.net/books?retryWrites=true&w=majority'

const dbOptions = {useNewUrlParser:true, useUnifiedTopology: true}

mongoose.connect(dbUrl, dbOptions)

const UserSchema = new mongoose.Schema({
  username: String,
  password: String
})

let User = new mongoose.model('User', UserSchema, 'users')
/////

app.get('/user', async (req, res) => {
  let allUser = await User.find({}).lean()
  res.status(200).send(allUser)
})

app.post('/user', async (req, res) => {

  let result = await User.collection.countDocuments({'username': req.body.username})
  console.log(result)
  if(result) {
    res.status(403).send({'msg': 'user already exists'})
  }
  else {
    let password = req.body.password
    bcrypt.hash(password, SALT_ROUNDS, (err, hash)=> {
      let user = {
        username: req.body.username,
        password: hash
      }
      new User(user).save()
      console.log(user)
      res.status(201).send(`welcome ${req.body.username}`)
    })
  }
})


app.listen(app.get('port'));
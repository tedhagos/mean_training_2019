const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')

const SALT_ROUNDS = 10;
const app = express()
app.set('port', process.env.PORT || 3000)

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


const dbUrl = 'mongodb+srv://tedhagos:mongopassword@cluster0-jjekq.mongodb.net/books?retryWrites=true&w=majority'

const dbOptions = {useNewUrlParser:true, useUnifiedTopology: true}

mongoose.connect(dbUrl, dbOptions)

const UserSchema = new mongoose.Schema({
  username: String,
  password: String
})

let User = new mongoose.model('User', UserSchema, 'users')

app.post('/login', async (req, res)=> {

  let username = req.body.username
  let password = req.body.password

  let condition = {'username': username}
  let record = await User.findOne(condition).lean()
  
  if(record) {
    console.log(record)

    bcrypt.compare(password, record.password, (err, result)=> {
      if(err) {
        res.status(404).send('incorrect password')
      }
      else {
        res.status(200).send(`welcome ${record.username}`)
      }
    })
  }
  else {
    res.status(404).send('user not found')
  }
  
})

app.get('/user', async (req, res)=> {
  let record = await User.find({}, '-__v').lean()
  res.status(200).json(record)
})

app.post('/user', (req, res)=> {  

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
})


app.listen(app.get('port'));
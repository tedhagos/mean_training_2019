const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()
app.set('port', process.env.PORT || 3000)

const dbUrl = 'mongodb+srv://tedhagos:mongopassword@cluster0-jjekq.mongodb.net/books?retryWrites=true&w=majority'

const dbOptions = {useNewUrlParser:true, useUnifiedTopology: true}

mongoose.connect(dbUrl, dbOptions)

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
/////////////////////

let UserSchema = mongoose.Schema({
  username: {type: String, required: true},
  password: {type: String, required: true}
})

let User = new mongoose.model('User', UserSchema, 'users')

/////////////////////
app.post('/user', (req, res) => {
  
  new User(req.body).save()
  res.status(201).send('OK')
})

app.get('/user', async (req, res) => {
  let data = await User.find({}).lean().exec()
  res.status(200).send(JSON.stringify(data))
})

app.get('/user/:id', async (req, res) => {

  let condition = {'username': req.params.id}
  let record = await User.findOne(condition).lean()

  if (record) {
    res.status(200).send(JSON.stringify(record))
  }
  else {
    res.status(404).send('record not found')
  }

})

/////////////////////
app.listen(3000)
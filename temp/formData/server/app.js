const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.set('port', process.env.PORT || 3000)
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const dbUrl = 'mongodb+srv://tedhagos:mongopassword@cluster0-jjekq.mongodb.net/test?retryWrites=true&w=majority'


const dbOptions = {useNewUrlParser:true, useUnifiedTopology: true}
mongoose.connect(dbUrl, dbOptions)

const CustomerSchema = new mongoose.Schema({
  lastname: String,
  firstname: String,
  password: String,
  email: String
})

const Customer = mongoose.model('Customer', CustomerSchema)

app.get('/customer', async (req, res)=> {
  let data = await Customer.find({}).lean().exec()
  if(!data) {
    console.log('401')
    res.sendStatus(401)
  }
  res.json(data)
})

app.post('/customer', (req, res)=> {
  console.log(req.body)
  res.sendStatus(200)
})


app.listen(app.get('port'))
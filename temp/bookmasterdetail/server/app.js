const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
app.set('port', process.env.PORT || 3000)

app.use(cors())

const dbUrl = 'mongodb+srv://tedhagos:mongopassword@cluster0-jjekq.mongodb.net/books?retryWrites=true&w=majority'

// IF YOU ARE RUNNING a local instance of mongoDb, you use this Url
// const dbUrl = 'mongodb://localhost/books'

const dbOptions = {useNewUrlParser:true, useUnifiedTopology: true}

mongoose.connect(dbUrl, dbOptions)

const BookSchema  = new mongoose.Schema({
  name: String,
  author: String,
  price: Number,
  rating: Number
})
const Book = mongoose.model('Book', BookSchema, 'books')

app.get('/book', (req, res)=> {
  Book.find().lean().exec((err, data) => {
    res.json(data)
  })
})

app.get('/book/:id', async (req, res)=> {

  let condition = {'_id': req.params.id}
  let data = await Book.findOne(condition).lean()
  res.json(data)
})


app.listen(app.get('port'))
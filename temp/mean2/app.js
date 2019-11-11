const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.set('port', process.env.PORT || 3000)
app.use(cors())

const dbUrl = 'mongodb+srv://tedhagos:mongopassword@cluster0-jjekq.mongodb.net/books?retryWrites=true&w=majority'
const dbOptions = {useNewUrlParser:true, useUnifiedTopology: true}
mongoose.connect(dbUrl, dbOptions)

const BookSchema = new mongoose.Schema({
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

app.listen(app.get('port'))
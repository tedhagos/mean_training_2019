const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const dbUrl = 'mongodb+srv://tedhagos:mongopassword@cluster0-jjekq.mongodb.net/books?retryWrites=true&w=majority'

mongoose.connect(dbUrl, {useUnifiedTopology: true});

const app = express()
app.set('port', process.env.PORT || 3000)
app.use(cors())

const BookSchema = new mongoose.Schema({
  name: String,
  author: String,
  price: Number,
  rating: Number
}) 

app.get('/books', (req, res) => {
  Book.find().lean().exec((err, data) => {
    res.send(data)
  })
})

const Book = new mongoose.model('Book', BookSchema, 'books')

app.listen(app.get('port'))
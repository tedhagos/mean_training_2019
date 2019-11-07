
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use('/node_modules', express.static('node_modules'));
app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.set('port', process.env.PORT || 3000 );

// mongoose.connect('mongodb://localhost/cm', {useNewUrlParser: true,   useUnifiedTopology:true});

mongoose.connect('mongodb+srv://tedhagos:mongopassword@cluster0-jjekq.mongodb.net/test?retryWrites=true&w=majority');

let Schema = mongoose.Schema;

let CandidateSchema = new Schema({
  lastname: { type: String, required: true },
  firstname: { type: String, required: true},
  middle_initial: { type: String },
  requiring_company: { type: String },
  position:  { type : String },
  level: { type: String }
});

let Candidate = mongoose.model('Candidate', CandidateSchema);


app.get('/candidate', (req, res) => {
  Candidate.find((err, data) => {
    res.json(data);
  });
}); 

app.get('/candidate/:lastname', (req, res) => {
  let condition = {'lastname' : req.params.lastname};
  console.log(condition);
  Candidate.find(condition).lean().exec((err, data) => {
    res.send(data);
  });
});
app.get('/candidate/:lastname/:firstname', (req, res) => {

  let condition = {'lastname': req.params.lastname, 
                   'firstname': req.params.firstname};
  Candidate.find(condition).lean().exec((err, data) => {
    if (!err) res.json(data);
    else res.send(err);
  });
});

app.post('/candidate', (req,res) => {
  
  let candidate = new Candidate({
    lastname : req.body.lastname,
    firstname: req.body.firstname,
    middle_initial: req.body.middle_initial,
    requiring_company: req.body.requiring_company,
    position : req.body.position,
    level: req.body.level
  });

  candidate.save((err) => {
    if (err) {
      console.log(err);
    }
    else {
      Candidate.find().lean().exec((err, data) => {
        if (!err) {
          res.json(data);
        }
        else {
          res.send(err);
        }
      });
    }
  });
});

app.listen(app.get('port'));
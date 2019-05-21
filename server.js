const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const Note = require('./note.model.js')
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://admin:admin@cluster0-hw6no.gcp.mongodb.net/test?retryWrites=true', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
  console.log("MongoDB database connection established successfully");
})


app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});

app.get('/note/', function(req, res, next) {
  Note.find(function(err, note) {
    if (err) {
      console.log(err);
    } else {
      res.json(note);
    }
  });
});

app.get('/note/:id', function(req, res, next) {
  let id = req.params.id;
  Note.findById(id, function(err, note) {
    res.json(note);
  });
});

app.post('/note', function(req, res, next) {
  let note = new Note(req.body);
  note.save()
    .then(note => {
      res.status(200).json({ 'note': 'note added successfully' });
    })
    .catch(err => {
      res.status(400).send('adding new note failed');
    });
});

app.post('/note/:id', function(req, res) {
  Note.findById(req.params.id,
    function(err, note) {
      if (!note) {
        res.status(404).send("404 not found!");
      } else {
        note.subj = req.body.subj;
        note.post_title = req.body.post_title;
        note.post_content = req.body.post_content;

        note.save()
          .then(note => { res.json("successfully update!"); })
          .catch(err => { res.this.status(400).send("update failed..."); });
      }
    });
});

app.delete('/note/:id',function (req,res,next) {
	Note.findById(req.params.id, function (err, note) {
		if (!note) {
			res.status(404).send("We can not find the note!");
		}
		else {
			note.remove();
			res.send("successfully remove the note!");
		}
	})
});
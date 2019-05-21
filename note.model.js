const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Note = new Schema({
  subj: {
    type: Number
  },
  post_title: {
    type: String
  },
  post_content: {
    type: String
  }
});

module.exports = mongoose.model('Note', Note);
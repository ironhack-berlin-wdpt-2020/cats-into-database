const mongoose = require('mongoose');

// creates a collection automatically --> Cat --> cats (collection)

const Cat = mongoose.model('Cat', {
  name: {
    type: String,
    default: "Peter",
    required: true,
    unique: true
  },
  colors: {
    type: [String],
    default: ['black']
  },
  breed: {
    type: String,
    enum: ['Persian', 'BSH', 'ESH'],
    required: true
  }
});

module.exports = Cat;
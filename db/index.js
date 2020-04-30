const mongoose = require('mongoose');
const faker = require('faker');

mongoose.connect('mongodb://localhost/sauron', { useNewUrlParser: true, useUnifiedTopology
: true });
mongoose.set('useCreateIndex', true);


let reviewSchema = new mongoose.Schema({
  userdata: {
    name: {type: String, unique: true},
    age: Number,
    experience: String
  },
  review: {
    title: String,
    text: String,
    published: Date,
    recommendation: Boolean,
    purchased: String,
    time: Number,
    difficulty: {type: Number, min: 0, max: 5},
    value: {type: Number, min: 0, max: 5},
    rating: {type: Number, min: 0, max: 5}
  },
  pictures: {
    pic1: String,
    pic2: String,
    pic3: String,
    pic4: String,
    pic5: String,
  },
  helpful: {
    yes: Number,
    no: Number
  }
});

let Review = mongoose.model('Review', reviewSchema);

let saveReviews = (data) => {
  data.save((err, doc) => {
    if (err) {
      console.log('Save Error! ', err);
      return;
    } else {
      console.log('Save Success!');
      return;
    }
  })
};

let getReviews = (number) => {
  return Review.find().limit(4).skip(number)
}

module.exports = {
  Review,
  saveReviews,
  getReviews
}

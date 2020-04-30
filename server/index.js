/* eslint-disable no-console */
const express = require('express');

const app = express();
const path = require('path');
const db = require('../db');

const port = 3003;

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

app.get('/api/reviews/:id', (req, res) => {
  const id = path.basename(req.url);
  const reviewsNum = id * 4;

  return db.getReviews(reviewsNum)
    .then((results) => {
      res.send(results).json();
      res.end();
    })
    .catch((err) => {
      console.log('Get ERROR! ', err);
      res.end();
    });
});


app.listen(port, () => {
  console.log(`listening on ${port}`);
});

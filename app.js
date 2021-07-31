const express = require('express');
const path = require('path');
const ejsMate = require('ejs-mate');

const app = express();

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('website/index');
});

app.get('/about', (req, res) => {
  res.render('website/about');
});

app.get('/contact', (req, res) => {
  res.render('website/contact');
});

app.use((req, res) => {
  res.render('website/notfound');
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`LISTENING ON PORT ${port}`));

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dataRoutes = require('./routes/data');
const session = require('express-session');
const CASAuthentication = require('cas-authentication');

const app = express();

mongoose.connect('mongodb+srv://userok:userok@cluster0.q4qa7.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());

app.use(session({
  secret: '12087371912',
  resave: false,
  saveUninitialized : true}
));

cas = new CASAuthentication({
  cas_url: 'https://login.insa-lyon.fr/cas',
  service_url: 'http://toto.insa-lyon.fr:3000'});

app.use('/', cas.bounce, (express.static('public')));

app.use('/api/data', cas.bounce, dataRoutes);

module.exports = app;

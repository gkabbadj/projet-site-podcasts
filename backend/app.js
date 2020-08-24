const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dataRoutes = require('./routes/data')

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

app.use('/api/data', dataRoutes);

app.use(function(req, res){
       res.send('message');
   });
module.exports = app;

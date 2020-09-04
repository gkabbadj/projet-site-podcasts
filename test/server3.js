express = require('express');
app = express();
session = require('express-session');
CASAuthentication = require('cas-authentication');

app.listen(4000);

app.use(session({
  secret: '12087371912',
  resave: false,
  saveUninitialized : true}
));

cas = new CASAuthentication({
  cas_url: 'https://login.insa-lyon.fr/cas',
  service_url: 'http://tc405-112-10.insa-lyon.fr:4000'});

app.use( '/', cas.bounce, function ( req, res ) {
    res.send( 'cool' );
});

module.exports = app;

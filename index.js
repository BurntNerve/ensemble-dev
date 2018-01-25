const express = require('express');
const config = require('./config');
const passport = require('passport');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');

require('./models/User.js');

require('./services/passport.js');

mongoose.connect(config.mlabURI);

const app = express();

app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [config.cookieKey],
}));

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes.js')(app);

app.listen(config.PORT || 5050);

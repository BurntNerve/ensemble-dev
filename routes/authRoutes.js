const passport = require('passport');

module.exports = app => {
  app.get('/', (req, res) => {
    console.log('Home page.');
    res.send({
      message: 'Hello fools.',
    });
  });

  app.get(
    '/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }),
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });

  app.get(
    '/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
      // Successful authentication, redirect home.
      res.redirect('/');
    },
  );

  app.get('/api/currentUser', (req, res) => {
    res.send(req.user);
  });
};

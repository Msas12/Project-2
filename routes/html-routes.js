// Requiring path to so we can use relative routes to our HTML files
const db = require('../models');
const path = require('path');

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require('../config/middleware/isAuthenticated');

module.exports = function(app) {
  app.get('/signup', (req, res) => {
    // // If the user already has an account send them to the members page
    // if (req.user) {
    //   res.redirect('/adddog');
    // }
    res.sendFile(path.join(__dirname, '../public/signup.html'));
  });

  app.get('/', (req, res) => {
    db.Adoptable.findAll({}).then((result) => res.render('index', {adpotable: result}));
  });

  app.get('/login', (req, res) => {
    // If the user already has an account send them to the adddog page
    if (req.user) {
      res.redirect('/adddog');
    }
    res.sendFile(path.join(__dirname, '../public/login.html'));
  });

  app.get('/adddog', isAuthenticated, (req, res) => {
    res.render('add-dog');
  });

  app.get('/success', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/success.html'));
  });

  app.get('/adopted', (req, res) => {
    res.render('adopted');
  });
};

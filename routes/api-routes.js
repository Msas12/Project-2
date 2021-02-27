// Requiring our models and passport as we've configured it
const db = require('../models');
const passport = require('../config/passport');
const connection = require('../config/connection.js');

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post('/api/login', passport.authenticate('local'), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  // app.get('/api/all', (req, res) => {
  //   // Finding all success stories, and then returning them to the user as JSON.
  //   // Sequelize queries are asynchronous and results are available to us inside the .then
  //   Stories.findAll({}).then((results) => res.json(results));
  // });

  // // Add a success story
  // app.post('/api/new', (req, res) => {
  //   console.log('Stories Data:');
  //   console.log(req.body);

  //   Stories.create({
  //     dogName: req.body.dog,
  //     body: req.body.body,
  //     created_at: req.body.created_at,
  //     // `results` here would be the newly created stories
  //   }).then((results) => res.json(results));
  // })


  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post('/api/signup', (req, res) => {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(() => {
        res.redirect(307, '/api/login');
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  // Get all stories
  app.get('/api/all', (req, res) => {
    const dbQuery = 'SELECT * FROM Stories';

    connection.query(dbQuery, (err, result) => {
      if (err) {throw err;}
      res.json(result);
    });
  });

  // Add a story
  app.post('/api/new', (req, res) => {
    console.log('Story Data:');
    console.log(req.body);

    const dbQuery =
        'INSERT INTO Stories (dogName, body, created_at) VALUES (?,?,?)';

    connection.query(
      dbQuery,
      [req.body.dogName, req.body.body, req.body.created_at],
      (err, result) => {
        if (err) {throw err;}
        if (result) {
          console.log('Story Successfully Saved!');
          res.json(req.body);
        }
      }
    );
  });


  // Route for posting dogs to main page


};


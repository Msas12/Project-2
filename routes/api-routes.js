// Requiring our models and passport as we've configured it
const db = require('../models');
const passport = require('../config/passport');


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


  // ----------------------------STORIES---------------------------------
  app.get('/api/all', (req, res) => {
    // Finding all success stories, and then returning them to the user as JSON.
    // Sequelize queries are asynchronous and results are available to us inside the .then
    db.Stories.findAll({}).then((results) => res.json(results));
  });

  // Add a success story
  app.post('/api/new', (req, res) => {
    console.log('Stories Data:');
    console.log(req.body);

    db.Stories.create({
      dogName: req.body.dog,
      body: req.body.body,
      // created_at: req.body.created_at,
      // `results` here would be the newly created stories
    }).then((results) => res.json(results));
  })

  //------------------------------Adopt-A-Dog-----------------------------------
  app.put('/api/dogs/:id', (req, res) => {
    const condition = `id = ${req.params.id}`;

    console.log('condition', condition);

    db.Adoptable.update(
      {
        devoured: req.body.adopted,
      },
      condition,
      (result) => {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
      }
    );
  });


};


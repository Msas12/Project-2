const express = require('express');
const session = require('express-session');
// Requiring passport as we've configured it
const passport = require('./config/passport');
// Requiring Multer
const multer = require('multer');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8080;

// Requiring our models for syncing
const db = require('./models');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Static directory
app.use(express.static('public'));
//app.use(express.static('./public')); <-not sure if we need this for multer????

app.use(
  session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Invoke routes
require('./routes/html-routes.js')(app);
require('./routes/api-routes.js')(app);
//require('./routes/multer-routes.js')(app);

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
});


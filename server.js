const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const helpers = require('./utils/auth')
const app = express();
const PORT = process.env.PORT || 3001;
// grabs the connection through the .env file if local or through jawsdb if the deployed heroku link
const sequelize = require('./config/config');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// stores session data and uses cookies to set a timer on how long it will stay stored
const sess = {
    secret: 'Secret time',
    cookie: {
        maxAge: 3600000,
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
};
// function for using above data
app.use(session(sess))
// helper functions in the handlebars
const hbs = exphbs.create({ helpers })

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers'));

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
    sequelize.sync({ force: false });
  });

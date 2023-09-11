const path = require('path');
//Import express
const express = require('express');
//import session
const session = require('express-session');
//import handlebars
const exphbs = require('express-handlebars');
//import routes
const routes = require('./controllers');
//import helpers
const helpers = require('./utils/helpers');
//import connection
const sequelize = require('./config/connection');

//Store connection
const SequelizeStore = require('connect-session-sequelize')(session.Store);

//Instantiate express
const app = express();
const PORT = process.env.PORT || 3001;

//Handlebars to use helpers
const hbs = exphbs.create({ helpers });

//Session information
const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
//App to use sessions
app.use(session(sess));
//Use handlebars
app.engine('handlebars', hbs.engine);
//For views
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Service public folder
app.use(express.static(path.join(__dirname, 'public')));
//App to usse routes
app.use(routes);

//To start server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on PORT ${PORT}`));
  console.log(`Server is available at http://localhost:${PORT}/`); //You can just click the link instead here
});

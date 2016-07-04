const express              = require('express');
const path                 = require('path');
const logger               = require('morgan');
const bodyParser           = require('body-parser');
const homeRoute            = require('./routes/home')
const app                  = express();
const port                 = process.env.PORT || 3000
const mapRoute             = require('./routes/mapRoute')
const session              = require('express-session')
const methodOverride       = require('method-override')
const userRoute            = require('./routes/user')

//setting view engine and view directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//setting our static assests directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(methodOverride('_method'))

app.use(session({
  // saveUninitalized: true,
  // resave: true,
  secret: 'danerysisjohnsaunt',
  cookie: {maxAge: 6000000000}
}))

app.use('/map', mapRoute)

app.use('/', homeRoute)

app.use('/user', userRoute)

app.listen(port, function(){
  console.log('you\'re running on port ' + port);
})
app.timeout = 100000000;

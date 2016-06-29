const express              = require('express');
const path                 = require('path');
const logger               = require('morgan');
const bodyParser           = require('body-parser');
const home_controller      = require('./controller/home_controller')
const app                  = express();
const port                 = process.env.PORT || 3000
const rats_controller      = require('./controller/rats_controller')
const restaurants_controller      = require('./controller/restaurants_controller')


//setting view engine and view directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//setting our static assests directory
app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));
app.use(bodyParser.json());

// app.use('/rest', restaurants_controller)

app.listen(port, function(){
  console.log('you\'re running on port ' + port);
})

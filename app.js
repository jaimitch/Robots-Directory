const express = require('express');
const mustacheExpress = require('mustache-express');
const robots = require('./data.js');

const application = express();

application.engine('mustache', mustacheExpress());
application.set('view engine', 'mustache' );
application.set('views', './views');


application.use(express.static('public'));

application.get('/', function (request, response) {
    console.log(robots);
    response.render('index', robots);
  
});

// application.get('/', function (request, response) {
//     response.render('robots', robots);
// });

application.get('/:userInfo', (request, response) => {
    var user = robots.users[request.params.userInfo -1]
//    var ID = parseInt(request.params.id);
//    var user = ID = -1;
    
    response.render('robots', user);
});


application.listen(3000);
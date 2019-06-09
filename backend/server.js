// server.js

    // call dependencies
const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./database.js'),
    multer = require('multer'),
    employeesRoute = require('./routes/employees.route.js');

    // initialized

    require('./service-update.js')

    // connect to database
    mongoose.Promise = global.Promise;
    mongoose.connect(config.db, { useNewUrlParser: true }).then(
      () => {console.log('Database is connected') },
      err => { console.log('Can not connect to the database'+ err)}
    );
    
    // midlewares
    const app = express();
    app.use(bodyParser.json());
    app.use(cors());
    app.use('/api', employeesRoute);
   
    const port = process.env.PORT || 4000;

    // server start
    const server = app.listen(port, function(){
     console.log('Listening on port ' + port);
    });
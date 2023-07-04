const express = require('express');
const app=express();
const {databaseService} = require('./services/databaseService');
app.use(express.json()); // Para analizar solicitudes con formato JSON
app.use(express.urlencoded({ extended: false })); // Para analizar solicitudes con formato de formulario
  
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
  
require('./routes')(app,databaseService());

app.listen(3000,function(){
    console.log('App listening on port 3000!');
});


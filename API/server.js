const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const routes = require('./router/');
const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Routing
routes(app);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
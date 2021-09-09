'use strict';

module.exports = (app) => {
   
  var controller = require('../controller/');
  
  //INDEX
  app.route('/')
   .get(controller.index)
  
  //ROUTER FOR POS_KASIR TABLE
  app.route('/kasir/all')
   .get(controller.kasirAll);
   
  app.route('/kasir/all/:id')
   .get(controller.kasirAllById);   
}
'use strict';

module.exports = (app) => {
   
  var controller = require('../controller/');
  
  //INDEX
  app.route('/')
   .get(controller.index)
  
  //ROUTER FOR POS_KASIR TABLE
  app.route('/kasir/all')
   .get(controller.kasirAll);
  
  //Order by id_transaksi   
  app.route('/kasir/all/id/:id')
   .get(controller.kasirById);
   
  //Order by range of date
  app.route('/kasir/all/date/:from/:to')
   .get(controller.kasirByRangeDate);
   
  //Order by jenis_transaksi
  app.route('/kasir/all/transaction/:transaction')
   .get(controller.kasirByTransaction)
}
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
   
   //Order by nama_item
   app.route('/kasir/all/name/:keyword')
      .get(controller.kasirByName)
   
   //Order by range of date
   app.route('/kasir/all/date/:from/:to')
      .get(controller.kasirByRangeDate);
   
   //Order by jenis_transaksi
   app.route('/kasir/all/transaction/:transaction')
      .get(controller.kasirByTransaction);
   
   //Insert new record
   app.route('/kasir/new/')
      .post(controller.kasirNewRecord);

   //Update record by id_transaksi
   app.route('/kasir/update/')
      .post(controller.kasirUpdate)
   
   //Delete record by id_transaksi
   app.route('/kasir/delete/id/:id')
      .get(controller.kasirDelete);
   
   //END OF ROUTER FOR POS_KASIR
   
   //ROUTER FOR POS_BARANG TABLE
   app.route('/barang/all')
      .get(controller.barangAll);
      
   //Order by id_barang
   app.route('/barang/all/id/:id')
      .get(controller.barangById);
      
   //Order by nama_barang
   app.route('/barang/all/name/:keyword')
      .get(controller.barangByName);
      
   //Insert new record   
   app.route('/barang/new/')
      .post(controller.barangNewRecord);
      
   //Delete record by id_barang
   app.route('/barang/delete/id/:id')
      .get(controller.barangDelete);
}
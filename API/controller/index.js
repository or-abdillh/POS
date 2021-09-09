'use strict';

var response = require('../response/');
var connection = require('../connection/');

//INDEX
module.exports.index = (req, res) => {
   response.success('API Sukses berjalan dengan baik', res)
}

//CONTROLLER FOR POS_KASIR TABLE
module.exports.kasirAll = (req, res) => {
   const sql = "SELECT * FROM POS_KASIR";
   
   connection.query(sql, (err, rows, fields) => {
      if (err) throw(err);
      else response.success(rows, res);
   })
}

module.exports.kasirAllById = (req, res) => {
   const id = req.params.id;
   const sql = `SELECT * FROM POS_KASIR WHERE id_transaksi = ${id}`;
   
   connection.query(sql, (err, rows, fields) => {
      if (err) throw(err);
      else response.success(rows, res);
   })
}
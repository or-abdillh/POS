'use strict';

var response = require('../response/');
var connection = require('../connection/');

//connection.query
const setQuery = (sql, res) => {
   connection.query(sql, (err, rows, fields) => {
      if (err) {
         response.internalError(err, res);
         throw(err);
      }   
      else {
         // If reponse is empty list
         if (rows.length == 0) {
            response.noContent(res);
         } else {
            response.success(rows, res);
         }
      }
   })
}

//INDEX
module.exports.index = (req, res) => {
   response.success('API Sukses berjalan dengan baik', res)
}

//CONTROLLER FOR POS_KASIR TABLE
module.exports.kasirAll = (req, res) => {
   const sql = "SELECT * FROM POS_KASIR";
   setQuery(sql, res);
}

//Order by id_transaksi
module.exports.kasirById = (req, res) => {
   const id = req.params.id;
   const sql = `SELECT * FROM POS_KASIR WHERE id_transaksi = ${id}`;
   setQuery(sql, res);
}

//Order by range of date
module.exports.kasirByRangeDate = (req, res) => {
   const from = req.params.from;
   const to = req.params.to;
   const sql = `SELECT * FROM POS_KASIR WHERE tanggal_transaksi >= ${from} AND tanggal_transaksi <= ${to}`;
   setQuery(sql, res);
}

//Order by jenis_transaksi
module.exports.kasirByTransaction = (req, res) => {
   const transaction = req.params.transaction;
   const sql = `SELECT * FROM POS_KASIR WHERE jenis_transaksi = '${transaction}'`;
   setQuery(sql, res);
}

//Insert new record into POS_KASIR
module.exports.kasirNewRecord = (req, res) => {
   const tanggal_transaksi = new Date().getTime();
   const nama_item = req.body.nama_item;
   const jenis_transaksi = req.body.jenis_transaksi;
   const nominal_transaksi = req.body.nama_item;
   
   console.log(req.body)
   
   const sql = `INSERT INTO POS_KASIR (tanggal_transaksi, nama_item, jenis_transaksi, nominal_transaksi) 
      VALUES('${tanggal_transaksi}', '${nama_item}', '${jenis_transaksi}', '${nominal_transaksi}')`;
      
   setQuery(sql, res);   
}

//Delete record by id_transaksi
module.exports.kasirDelete = (req, res) => {
   const id = req.params.id;
   const sql = `DELETE FROM POS_KASIR WHERE id_transaksi = ${id}`;
   setQuery(sql, res);
}
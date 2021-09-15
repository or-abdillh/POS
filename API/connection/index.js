var mysql = require('mysql');

var conn = mysql.createConnection({
  host: 'sql6.freemysqlhosting.net',
  user: 'sql6437268',
  password: 'd2UIABEMSu',
  database: 'sql6437268'
});

conn.connect(err => {
  if (err) throw err;
  console.log('MySQL connected !!');
});

module.exports = conn;

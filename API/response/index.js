'use strict';

module.exports.success = (values, res) => {
  const data = {
    'code': 200,
    'message': 'Success',
    'results': values
  };
  
  res.header('Access-Control-Allow-Origin', '*')
  res.json(data);
  res.end();
}
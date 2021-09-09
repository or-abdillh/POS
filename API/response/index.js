'use strict';

const setData = (code, message, values) => {
   return {
    'code': code,
    'message': message,
    'results': values  
   }
} 

const setResponse = (data, res) => {
   res.header('Access-Control-Allow-Origin', '*')
   res.json(data);
   res.end();
}

module.exports.success = (values, res) => {
  setResponse(setData(200, 'success' ,values), res);
}

module.exports.noContent = (res) => {
   setResponse(setData(204, 'no content', []), res);
}
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

//Response success
module.exports.success = (values, res) => {
  setResponse(setData(200, 'success' ,values), res);
}

//Response no content
module.exports.noContent = res => {
   setResponse(setData(204, 'no content', []), res);
}

//Response internal server error
module.exports.internalError = (err, res) => {
   setResponse(setData(500, 'internal server error', err), res);
} 
const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = ()=>{}) => {
  // console.log('Serving request type !!' + req.method + ' for url ' + req.url);

  if (req.method === 'OPTIONS'){
    res.writeHead(200,headers);
    res.end();
    next(); // invoke next() at the end of a request to help with testing!
  }

  if (req.method === 'GET') {
    var commands = ['left', 'right', 'up', 'down'];

    res.writeHead(200, headers);
    res.end(commands[Math.floor(Math.random()*commands.length)]);
    next(); // invoke next() at the end of a request to help with testing!
  }

};


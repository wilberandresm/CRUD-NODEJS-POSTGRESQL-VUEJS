const express=require('express');
const routes= require('../routes');

const server = express();

const bodyParser = require('body-parser')

server.use(bodyParser.urlencoded({extended:false}))
 
// create application/x-www-form-urlencoded parser
server.use(bodyParser.json())


server.use(express.json());

server.use('/api',routes);

module.exports=server;
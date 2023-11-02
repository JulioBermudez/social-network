const connection = require('../config/connection');
const { User, Thought } = require('../models');
const datas = require('./datas')

connection.on('error', (err) => err);

connection.once('open', async () =>{
    console.log(('connected'));
    
})
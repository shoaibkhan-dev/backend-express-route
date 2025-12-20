const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send({status:1, msg: 'hello world'})
})

app.get('/news', (req, res)=>{
    res.send({status:2, msg: 'news page api'})
})

app.listen('5000')

const express = require('express');

const apps = express();

app.get('/', (req, res)=>{
    res.send({status:1, msg:'cart page api'})
})

app.listen('9000')


const express = require('express')

const apple = express();

apple.get('/', (req, res)=>{
    res.send({status:1, message:'product page api'})
})

apple.listen('6000')



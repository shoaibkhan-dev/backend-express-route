const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send({status:1, msg: 'hello world'})
})

app.get('/news', (req, res)=>{
    res.send({status:2, msg: 'news page api'})
})

app.listen('5000')


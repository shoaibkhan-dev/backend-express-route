// const express = require('express');
// const app = express();

// app.get('/', (req, res)=>{
//     res.send({status:1, msg: 'hello world'})
// })

// app.get('/news', (req, res)=>{
//     res.send({status:2, msg: 'news page api'})
// })

// app.listen('5000')

// const express = require('express');

// const apps = express();

// app.get('/', (req, res)=>{
//     res.send({status:1, msg:'cart page api'})
// })

// app.listen('9000')


// const express = require('express')

// const apple = express();

// apple.get('/', (req, res)=>{
//     res.send({status:1, message:'product page api'})
// })

// apple.listen('6000')


// const express = require ('express');

// const route = express();
// route.get('/cart', (req, res) =>{
//     res.send({status:3, msg:'cart page api'})
// })

// route.listen('7000')

// const express = require('express');

// const usersRoutes = express.Router();
//  const users = [
//         {id: 1, username: 'hamza'},
//         {id: 2, username: 'zafar'},
//         {id: 3, username: 'arif'}
//     ]

// app.use(express.json())

// usersRoutes.get('/', async (req, res)=>{
//    res.send({isSuccess: true, data: users})
// })

// usersRoutes.post('/', async(req, res)=>{
//     const {username} = req.body;

//     const userId = users.length + 1;

//     const foundUser = users.find((item) => item.username === username);

//     if(foundUser){
//         return res.status(409)
//     }

//     users.push({username, id: userId});

//     res.send({isSuccess: true, message: 'user created successfully', data:users})
// })

// usersRoutes.delete('/:id', (req, res)=>{
//     // req.params;
//     // console.log('params: ', req.params);
//     // res.send('its working')

//     const { id } = req.params;
//     const foundUser = users.find((item) => item.id === +id)

//     // if(!foundUser){
//     //     res.status(404).send({isSuccess: true, message: `user not found for id ${id}`})
//     // }
    
//     res.send('working fine')

// })

// usersRoutes.listen('8000');

const express=require('express');
const app = express();

app.get('/product', async(req,res)=>{
    res.send({status:1, message: 'product page api'})
});

app.post('/form', (req, res)=>{
    res.send({status:2, message:'cart page api'})
})

app.listen('8000');

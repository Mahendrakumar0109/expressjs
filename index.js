const express = require('express');

const app=express();

app.use(express.json()); 

app.get('/',(req,res)=>{
    res.send("Hi the server is running!")
})

const products =[
    {
        id:1,
        name:"iQoo7"
    },
    {
        id:2,
        name:"iQoo8"
    },
    {
        id:3,
        name:"iQoo8 pro"
    }

]

app.get('/products',(req,res)=>{
    res.json(products)
})

app.get('/products/:id',(req,res)=>{
    const newData =products.filter(item => item.id.toString() === req.params.id);
    return res.json(newData);
})
  
app.post('/addproducts',(req,res)=>{
    const {id,name}= req.body;
    console.log(id,name);
    return res.send('Data Stored in Database!!')
})

app.listen(4201,()=> console.log('my server 4201 is running....'));
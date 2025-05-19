//Imoport and initialization
const express = require('express');
const { start } = require('pm2');
const app =express();
const PORT = process.env.PORT || 3002;

//plugins used
app.use(express.json());
app.use(express.urlencoded({ extended:true}));


app.get('/', (req, res)=> {
   console.log('This is my name / Atinuke')
    res.json({username: 'Atinuke'})
})




//start
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
});
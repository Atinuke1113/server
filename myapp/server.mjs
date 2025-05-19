//Imoport and initialization
import express from 'express';
import cors from 'cors';

const app =express();
const PORT = process.env.PORT || 3002;

//plugins used
app.use(cors())
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
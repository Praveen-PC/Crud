const express=require('express')
const bodyparser=require('body-parser')
const cors = require('cors');
const path=require('path')
const db=require('./model/db')


const app=express()
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend's origin
    methods: ['GET', 'POST','PUT','DELETE'],
}));


app.get('/',(req,res)=>{
    const sql='SELECT * FROM react.react_crud'
    db.query(sql,(err,result)=>{
        if (err) throw err
        res.send(result)
    })
})

app.post('/insert',(req,res)=>{
    const {username,email,number,password}=req.body
    const sql='INSERT INTO react.react_crud (username,email,number,password) VALUES (?,?,?,?)'
    db.query(sql,[username,email,number,password],(err,result)=>{
        if (err) throw err
        console.log('data is inserted',result)
    })
})

app.get('/edit/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM react.react_crud WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) return res.status(500).send(err);
        if (result.length === 0) return res.status(404).send('User not found');
        res.json(result[0]);
    });
});

app.put('/edit/:id',(req,res)=>{
    const {id}=req.params
    const {username,email,number,password}=req.body
    const sql='UPDATE react.react_crud SET username=? ,email=?, number=?, password=? WHERE id=?'
    db.query(sql,[username,email,number,password,id],(err,result)=>{
        if (err) throw err
        // res.json(result[0])
        console.log('value updated')

    })
})

app.delete('/delete/:id',(req,res)=>{
    const {id}=req.params;
    const sql='DELETE FROM react.react_crud WHERE id=?'  
    db.query(sql,[id],(err,result)=>{
        if (err) throw err
        console.log('value is deleted',result)
        return res.status(200).send({message:'user deleted successfully'})
        
    })
})


const PORT=process.env.PORT || 5000

app.listen(PORT,(err)=>{
      if (err) throw err
      console.log(`server running on ${PORT}`)


})
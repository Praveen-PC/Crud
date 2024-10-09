const mysql=require('mysql2')

const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"@Root123",
    database:'react'
})

con.connect((err)=>{
    if (err) throw (err)
    console.log("db is connected")
   
//     const table = `CREATE TABLE react_crud(
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         name VARCHAR(100) NOT NULL,
//         email VARCHAR(100) NOT NULL,
//         number INT NOT NULL,
//         password VARCHAR(255) NOT NULL
//   )`;
//     con.query(table,(err)=>{
//         if (err) throw err
//         console.log("table is created")
//     })
//     con.end()

})

module.exports=con
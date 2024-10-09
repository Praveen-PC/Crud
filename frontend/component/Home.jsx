import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"


const Home=()=>{
     const[data,setdata]=useState([])
     const navigate=useNavigate()

     const server= async() => {
      await axios.get('http://localhost:5000')
      .then((res)=>{
        setdata(res.data)
      })
     }

     useEffect(()=>{
      server()
     },[])
 
const handleDelete= async(id)=>{
  try{
    await axios.delete(`http://localhost:5000/delete/${id}`)  
  } catch(err){
    console.log(err)
  }
  server()
}


  return(
    <>
    <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Bootstrap</a>
    <Link to='/insert' ><button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Add_User</button></Link>
  </div>
</nav>

  <div className='container'>
<table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">USERNAME</th>
      <th scope="col">EMAIL</th>
      <th scope="col">NUMBER</th>
      <th scope='col'>PASSWORD</th>
      <th scope='col'>Action</th>
    </tr>
  </thead>
  <tbody>
   {data.map((value)=>(
    <tr key={value.id}>
      <td>{value.id}</td>
      <td>{value.username}</td>
      <td>{value.email}</td>
      <td>{value.number}</td>
      <td>{value.password}</td>
       <td>
        <Link to={`/edit/${value.id}`} className='btn btn-info'>edit</Link>
        <button className='btn btn-danger' onClick={()=>handleDelete(value.id)}>delete</button>
       </td>
    </tr>
   ))}
  </tbody>
</table>
</div>

    
    </>
  )
}

export default Home





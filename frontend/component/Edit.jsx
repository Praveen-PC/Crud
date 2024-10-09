
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "./common/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Edit = () => {
  const {id}=useParams('')
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    axios.get('http://localhost:5000/edit/'+id)
    .then((res)=>{
      console.log(res.data)
      const data=res.data
      setusername(data.username),
      setemail(data.email),
      setnumber(data.number),
      setpassword(data.password)
    }).catch((err)=>console.log(err))
  },[id])

  const handlesubmit = (e) => {
    e.preventDefault();
    axios.put("http://localhost:5000/edit/" + id, { username, email, number, password })
      .then((res) => {
       console.log(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
      navigate('/')
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="modal-body">
          <form method="post">
            <div className="mb-3">
              <label className="col-form-label">Name</label>
              <input
                type="text"
                onChange={(e) => setusername(e.target.value)}
                className="form-control"
                name="username"
                value={username}
              />
            </div>
            <div className="mb-3">
              <label className="col-form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="col-form-label">Number</label>
              <input
                type="number"
                className="form-control"
                name="number"
                value={number}
                onChange={(e) => setnumber(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="col-form-label">Password</label>
              <input
                type="text"
                className="form-control"
                name="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>navigate('/')}>
            Close
          </button>
          <button type="button" className="btn btn-primary" onClick={handlesubmit}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default Edit;

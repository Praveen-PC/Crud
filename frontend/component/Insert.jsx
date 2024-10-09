
import { Link, useNavigate } from "react-router-dom";
import Header from "./common/Header";
import { useState } from "react";
import axios from "axios";

const Insert = () => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/insert", { username, email, number, password })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
      navigate("/");
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
              />
            </div>
            <div className="mb-3">
              <label className="col-form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="col-form-label">Number</label>
              <input
                type="number"
                className="form-control"
                name="number"
                onChange={(e) => setnumber(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="col-form-label">Password</label>
              <input
                type="text"
                className="form-control"
                name="password"
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
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

export default Insert;

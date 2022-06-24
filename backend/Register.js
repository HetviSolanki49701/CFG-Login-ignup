import { useState } from "react";
import {useNavigate} from 'react-router-dom';
const path=require('path')
// import {register} from "../api/auth"

const Register = () => {
  const [credentials, setCredentials] = useState({firstname:"", lastname:"", phone:"", email:"", password:"" })
  let navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const {firstname, lastname, phone, email, password } = credentials
    const appPath=path.join(__dirname,'./app.js')
    const response = await fetch ("/register", {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({firstname, lastname, phone, email, password})
    })
    const json = await response.json()
    console.log(json);
    localStorage.setItem('token', json.authtoken)
    navigate.push("/")

  };

  const onChange = (e) => {
    setCredentials({...credentials, [e.target.name]: [e.target.value]})
  }

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form action="" onSubmit={handleSubmit}>
            <h2>Register</h2>
            <div className="form-group">
              <input
                type="text"
                name="firstname"
                className="form-control"
                // value={fname}
                onChange={onChange}
                placeholder="Your first name"
                autoFocus
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="lastname"
                className="form-control"
                // value={lname}
                onChange={onChange}
                placeholder="Your last name"
                autoFocus
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="phone"
                className="form-control"
                // value={num}
                onChange={onChange}
                placeholder="Your Mobile number"
                autoFocus
              />
            </div>

            
            Gender:
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
                checked
              />
              <label className="form-check-label" htmlFor="exampleRadios1">
                Male 
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
                value="option2"
              />
              <label className="form-check-label" htmlFor="exampleRadios2">
                Female
              </label>
            </div>

            <div className="form-group">
              <input
                type="text"
                name="email"
                className="form-control"
                // value={email}
                onChange={onChange}
                placeholder="Your email"
                autoFocus
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                name="password"
                className="form-control"
                // value={password}
                onChange={onChange}
                placeholder="Your password here"
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                name="confirmpassword"
                className="form-control"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
                placeholder="Confirm password"
              />
            </div>

            <br />
            <button
              onClick={handleSubmit}
              type="primary"
              className="mb-3 btn btn-primary"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
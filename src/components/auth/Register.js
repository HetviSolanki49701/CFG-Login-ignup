import { useState } from "react";
// import {register} from "../api/auth"

const Register = () => {
  const [fname, setFName] = useState()
  const [lname, setLName] = useState()
  const [email, setEmail] = useState();
  const [num, setNum] = useState();
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // try {
    //     register({email,password,referral})
    //       .then((res) => {})
    //       .catch((err) => console.log(err));
    //   } catch (error) {
    //     console.log(error);
    //   }
  };

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form action="" onSubmit={handleSubmit}>
            <h2>Register</h2>
            <div className="form-group">
              <input
                type="name"
                className="form-control"
                value={fname}
                onChange={(e) => setFName(e.target.value)}
                placeholder="Your first name"
                autoFocus
              />
            </div>

            <div className="form-group">
              <input
                type="name"
                className="form-control"
                value={lname}
                onChange={(e) => setLName(e.target.value)}
                placeholder="Your last name"
                autoFocus
              />
            </div>

            <div className="form-group">
              <input
                type="number"
                className="form-control"
                value={num}
                onChange={(e) => setNum(e.target.value)}
                placeholder="Your Mobile number"
                autoFocus
              />
            </div>

            
            Gender:
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
                checked
              />
              <label class="form-check-label" for="exampleRadios1">
                Male 
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
                value="option2"
              />
              <label class="form-check-label" for="exampleRadios2">
                Female
              </label>
            </div>

            <div className="form-group">
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                autoFocus
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password here"
              />
            </div>

            <div className="form-group">
              <input
                type="password"
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

import {useState} from "react";
// import {login} from "../api/auth";

const Login = () => {
  const [email, setEmail] = useState("sss@gmail.com");
  const [password, setPassword] = useState("ss@3");

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // try {
    //   login({email,password})
    //     .then((res) => {})
    //     .catch((err) => console.log(err));
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form onSubmit={handleSubmit}>
          <h2>Login</h2>
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
                placeholder="Your password"
              />
            </div>

            <br />
            <button
              onClick={handleSubmit}
              type="primary"
              className="mb-3 btn btn-primary"
            >
              Login with Email/Password
            </button>
          </form>
        </div>
      </div>
    </div>
    // <>dfdgdfgrg</>
  );
};

export default Login;

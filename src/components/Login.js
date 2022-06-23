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
    let x  = e 
    console.log(x)
  };

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form onSubmit={handleSubmit}>
          <h2>Login</h2>
            <div className="form-group mt-4 mb-4">
              <input
                type="email"
                className="form-control w-75 mx-auto"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                autoFocus
              />
             
            </div>

            <div className="form-group">
              <input
                type="password"
                className="form-control w-75 mx-auto"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password"
              />
              
            </div>
            <button
              onClick={handleSubmit}
              type="primary"
              className="mb-3 btn btn-primary lead mt-3"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
    // <>dfdgdfgrg</>
  );
};

export default Login;
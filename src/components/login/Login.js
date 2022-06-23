import {useState} from "react";
// import {login} from "../api/auth";
import './login.css'
import {useForm} from 'react-hook-form'

const Login = () => {
  const [email, setEmail] = useState("sss@gmail.com");
  const [password, setPassword] = useState("ss@3");
  const {register, handleSubmit, formState: {errors}} = useForm()
  const Submit = async (e) => {
    // e.preventDefault();
    // try {
    //   login({email,password})
    //     .then((res) => {})
    //     .catch((err) => console.log(err));
    // } catch (error) {
    //   console.log(error);
    // }
    console.log(e);
  };

  return (
    <div className="container p-5" style={{justifyContent:"center",}}>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form onSubmit={handleSubmit(Submit)}>
          <h2>Login</h2>
            <div className="form-group mb-4">
              <input
                type="email"
                className="form-control w-75"
                //value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                autoFocus
                {...register("email", {required:true})}
              />
            </div>

            <div className="form-group mb-3">
              <input
                type="password"
                className="form-control w-75"
                //value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password"
                {...register("password", {required:true})}
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